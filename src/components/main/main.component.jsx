import React, { Component } from 'react';
import './main.styles.scss';
import { createChart } from 'lightweight-charts';
import { getData, getSymbolData } from './utils.js';

import Select from 'react-select';
import AsyncSelect from 'react-select/async';

class Main extends Component {
  ref = React.createRef();
  state = {
    selectedSymbol: null,
  };

  loadOptions = async (inputText, callback) => {
    callback(await getSymbolData(inputText));
  };

  onChange = (selectedSymbol) => {
    this.setState({
      selectedSymbol: selectedSymbol || null,
    });
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
    // const data = getData();
    // candleSeries.setData(data);

    // getData().then((data) => {
    //   // console.log(data);
    //   candleSeries.setData(data);
    // });
  }

  render() {
    console.log('console this.state:', this.state);
    console.log(
      'console this.state.selectedSymbol:',
      this.state.selectedSymbol
    );
    return (
      <div className="main">
        <div className="trading">
          <div className="box one">
            <AsyncSelect
              // value={this.state.selectedSymbol}
              onChange={this.onChange}
              loadOptions={this.loadOptions}
              autoFocus
              noOptionsMessage={() => 'Search symbol'}
              placeholder="Search Symbol"
            />
            {/* <Select
              value={inputValue}
              onInputChange={this.handleInputChange}
              onChange={this.handleChange}
              options={data}
            /> */}
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
