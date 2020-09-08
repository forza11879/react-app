import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './main.styles.scss';
import { createChart } from 'lightweight-charts';
import { getData, getCreateChart } from '../MyAsyncSelecy/utils.js';
import MyAsyncSelect from '../MyAsyncSelecy/my-async-select.component';

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
