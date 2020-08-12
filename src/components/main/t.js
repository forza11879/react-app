import React, { Component } from 'react';
import './main.styles.scss';
import { createChart } from 'lightweight-charts';
import { getData, getSymbolData } from './utils.js';

// import Select from 'react-select';
import AsyncSelect from 'react-select/async';

// const loadOptions = async (inputText) => {
//   const symbolData = await getSymbolData(inputText);
//   console.log('symbolDATA: ', symbolData);
//   return symbolData;
// };

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

  onInputChange = (_, { action }) => {
    if (action === 'set-value') {
      this.props.onOptionSelected(this.getFocusedOption());
    }
  };

  // we're setting onUserInteracted method as callback to different user interactions
  render() {
    return (
      <div onMouseMove={this.onUserInteracted} onClick={this.onUserInteracted}>
        <AsyncSelect
          {...this.props}
          ref={(ref) => (this.ref = ref)}
          onKeyDown={this.onUserInteracted}
          onInputChange={this.onInputChange}
        />
      </div>
    );
  }
}

class Main extends Component {
  ref = React.createRef();
  state = {
    selectedSymbol: null,
    isClearable: true,
    symbol: null,
  };

  // loadOptions = (_, callback) => callback(data);

  onFocusedOptionChanged = (option) => console.log('focused on: ', option);

  onOptionSelected = async (option) => {
    await getSymbolData(option);
    console.log('selected: ', option);
  };

  componentDidMount() {
    const chart = createChart(this.ref.current, {
      width: 900,
      height: 400,
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
    });

    const candleSeries = chart.addCandlestickSeries();
    console.log(
      'DID MOUNT this.state.selectedSymbol:',
      this.state.selectedSymbol
    );
    getData().then((data) => {
      console.log(data);
      candleSeries.setData(data);
    });

    getSymbolData().then((data) => {
      console.log(data);
      this.setState({ selectedSymbol: data });
      console.log('THIS.selectedSymbol', this.selectedSymbol);
    });
  }

  render() {
    return (
      <div className="main">
        <div className="trading">
          <div className="box one">
            <MyAsyncSelect
              cacheOptions
              loadOptions={this.state.selectedSymbol}
              defaultOptions
              onFocusedOptionChanged={this.onFocusedOptionChanged}
              onOptionSelected={this.onOptionSelected}
            />

            {/* {this.state.selectedValue && (
              <div style={{ marginTop: 20, lineHeight: '25px' }}>
                <div>
                  <b>Selected Value: </b> {this.state.selectedValue}
                </div>
              </div>
            )} */}
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

export default Main;
