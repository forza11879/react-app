import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './main.styles.scss';
import { createChart } from 'lightweight-charts';
import { getData, getSymbolData, getCreateChart } from './utils.js';

import AsyncSelect from 'react-select/async';

class MyAsyncSelect extends React.Component {
  /* Select component reference can be used to get currently focused option */
  getFocusedOption() {
    return this.ref.select.select.state.focusedOption;
  }

  // we'll store lastFocusedOption as instance variable (no reason to use state)
  componentDidMount() {
    this.lastFocusedOption = this.getFocusedOption();
  }

  // Select component reference can be used to check if menu is opened */
  isMenuOpen() {
    return this.ref.select.state.menuIsOpen;
  }

  // This function will be called after each user interaction (click, keydown, mousemove).
  // If menu is opened and focused value has been changed we will call onFocusedOptionChanged
  // function passed to this component using props. We do it asynchronously because onKeyDown
  // event is fired before the focused option has been changed.
  onUserInteracted = () => {
    Promise.resolve().then(() => {
      const focusedOption = this.getFocusedOption();
      if (this.isMenuOpen() && this.lastFocusedOption !== focusedOption) {
        this.lastFocusedOption = focusedOption;
        this.props.onFocusedOptionChanged(focusedOption);
      }
    });
  };

  toggleClearable = () =>
    this.setState({ isClearable: !this.props.isClearable });

  onInputChange = (_, { action }) => {
    if (action === 'set-value') {
      this.props.onOptionSelected(this.getFocusedOption());
    }
  };

  loadOptions = async (inputText) => {
    const symbolData = await getSymbolData(inputText);
    console.log('symbolDATA: ', symbolData);
    return symbolData;
  };

  // we're setting onUserInteracted method as callback to different user interactions
  render() {
    console.log('RENDER Child');
    console.log('Props MyAsyncSelect', this.props);
    return (
      <div onMouseMove={this.onUserInteracted} onClick={this.onUserInteracted}>
        <AsyncSelect
          {...this.props}
          ref={(ref) => (this.ref = ref)}
          onKeyDown={this.onUserInteracted}
          onInputChange={this.onInputChange}
          loadOptions={this.loadOptions}
          autoFocus
          noOptionsMessage={() => 'Search symbol'}
          placeholder="Search Symbol"
          isClearable={this.props.isClearable} // allows us to clear the selected value either using the backspace button or the “x” button on the right side of the field
          clear // Removing all selected options using the clear button
          pop-value // Removing options using backspace
          loadingIndicator
        />
      </div>
    );
  }
}

let candleSeries;

class Main extends Component {
  ref = React.createRef();
  state = {
    selectedSymbol: null,
    isClearable: true,
    symbol: null,
  };

  onFocusedOptionChanged = (option) => console.log('focused on: ', option);

  onOptionSelected = (option) => {
    console.log('selected: ', option.label);
    this.setState({ selectedSymbol: option.label }, () =>
      console.log('STATE selectedSymbol', this.state.selectedSymbol)
    );
  };

  componentDidMount() {
    candleSeries = getCreateChart(this.ref.current, createChart);
    getData(this.state.selectedSymbol).then((data) => {
      console.log(data);
      candleSeries.setData(data);
    });
    console.log('STATE from DidMount', this.state.selectedSymbol);
  }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   getData(this.state.selectedSymbol).then((data) => {
  //     console.log(data);
  //     candleSeries.setData(data);
  //     // candleSeries.update(data);
  //   });
  //   console.log('this.state from DidUpdate', this.state.selectedSymbol);
  //   console.log('prevState from DidUpdate', prevState.selectedSymbol);
  //   console.log('snapshot from DidUpdate', snapshot);
  // }

  shouldComponentUpdate(nextProps, nextState) {
    getData(nextState.selectedSymbol).then((data) => {
      console.log(data);
      candleSeries.setData(data);
      // candleSeries.update(data);
    });
    console.log(
      'nextState from shouldComponentUpdate',
      nextState.selectedSymbol
    );
    console.log(
      'this.state from shouldComponentUpdate',
      this.state.selectedSymbol
    );
    nextState.selectedSymbol !== this.state.selectedSymbol
      ? console.log('Not Equal')
      : console.log('Equal');
    return false;
  }

  render() {
    console.log('RENDER Parent');
    console.log('Props Main', this.props);

    return (
      <div className="main">
        <div className="trading">
          <div className="box one">
            <MyAsyncSelect
              cacheOptions
              // defaultOptions={this.loadOptions} // loaded only on init
              isClearable={this.state.isClearable}
              onFocusedOptionChanged={this.onFocusedOptionChanged}
              onOptionSelected={this.onOptionSelected}
            />
          </div>
          <div className="box two" ref={this.ref}></div>
        </div>
        <div className="charts">
          <div className="box three">3</div>
          <div className="box four">4</div>
          <div className="box five">5</div>
          <div className="box six">6</div>
        </div>
      </div>
    );
  }
}

export default withRouter(Main);
