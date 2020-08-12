import React, { Component } from 'react';
import './main.styles.scss';
import { createChart } from 'lightweight-charts';
import { getData, getSymbolData } from './utils.js';

import AsyncSelect from 'react-select/async';

class Main extends Component {
  ref = React.createRef();
  textInput = React.createRef();
  // textInput = React.useRef(null);
  state = {
    selectedSymbol: null,
    isClearable: true,
    symbol: null,
  };

  getInputValue() {
    return this.ref.select.state.inputValue;
  }

  toggleClearable = () =>
    this.setState((state) => ({ isClearable: !state.isClearable }));

  loadOptions = async (inputText) => {
    const symbolData = await getSymbolData(inputText);
    console.log('symbolDATA: ', symbolData);
    return symbolData;
  };

  // _handleChange = (event) => {
  //   this.setState({ value: event.target.value })
  // }

  onInputChange = (newValue, reason) => {
    console.log('reason.action :', reason.action);
    // const { value } = this.props;
    // console.log('PROPS :', this.props);
    // console.log('newValue :', newValue);
    // console.log('newValue :', e.value);

    // removes all the symbols, spaces
    const selectedSymbol = newValue.replace(/\W/g, '');

    this.setState({ selectedSymbol: selectedSymbol });

    // return selectedSymbol;
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
  }

  render() {
    const { isClearable } = this.state;
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
              defaultOptions
              cacheOptions
              loadOptions={this.loadOptions}
              onInputChange={this.handleInputChange}
              // onChange={this.handleInputChange}
              autoFocus
              noOptionsMessage={() => 'Search symbol'}
              placeholder="Search Symbol"
              isClearable={isClearable} // allows us to clear the selected value either using the backspace button or the “x” button on the right side of the field
              clear // Removing all selected options using the clear button
              pop-value // Removing options using backspace
              loadingIndicator
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
