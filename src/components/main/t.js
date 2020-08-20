import React, { useState, useEffect, useCallback } from 'react';
import './main.styles.scss';
import { createChart } from 'lightweight-charts';
import { getData, getSymbolData } from './utils.js';

import AsyncSelect from 'react-select/async';

const Main = () => {
  const [value, setValue] = useState('');
  // const [isClearable, setIsClearable] = useState('');
  const ref = React.createRef();

  // const toggleClearable = () => setIsClearable(() => !isClearable);

  const handleInputChange = (inputValue, { action }) => {
    // setValue(inputValue);
    console.log('action: ', action);
    console.log('value before action typeof: ', typeof inputValue);
    console.log('value before action: ', inputValue);
    if (action === 'set-value') {
      setValue(inputValue);
      console.log('value after action: ', inputValue);
    }
  };

  // const handleInputChange = useCallback(
  //   (inputValue) => setValue(inputValue),
  //   []
  // );

  const loadOptions = async (inputText) => {
    const symbolData = await getSymbolData(inputText);
    console.log('symbolDATA: ', symbolData);
    return symbolData;
  };

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    const chart = createChart(ref.current, {
      width: 900,
      height: 400,
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
    });
    const candleSeries = chart.addCandlestickSeries();

    getData(value).then((data) => {
      console.log(data);
      candleSeries.setData(data);
      // candleSeries.update(data);
    });
  });

  return (
    <div className="main">
      <div className="trading">
        <div className="box one">
          <AsyncSelect
            value={value}
            cacheOptions
            // defaultOptions={loadOptions} // loaded only on init
            loadOptions={loadOptions}
            onInputChange={handleInputChange}
            autoFocus
            noOptionsMessage={() => 'Search symbol'}
            placeholder="Search Symbol"
            // isClearable={isClearable} // allows us to clear the selected value either using the backspace button or the “x” button on the right side of the field
            clear // Removing all selected options using the clear button
            pop-value // Removing options using backspace
            loadingIndicator
          />
        </div>
        <div className="box two" ref={ref}></div>
      </div>
      <div className="charts">
        <div className="box three">3</div>
        <div className="box four">4</div>
        <div className="box five">5</div>
        <div className="box six">6</div>
      </div>
    </div>
  );
};

export default Main;

//////////////////////////////////////////////

import React from 'react';
import { createChart } from 'lightweight-charts';

let chart;
let candlestickSeries;

export default ({ lastCandle }) => {
  const myRef = React.useRef();
  // console.log('candles' , lastCandle)
  React.useEffect(() => {
    chart = createChart(myRef.current, { width: 1000, height: 800 });
    chart.applyOptions({
      timeScale: {
        rightOffset: 45,
        barSpacing: 15,
        lockVisibleTimeRangeOnResize: true,
        rightBarStaysOnScroll: true,
      },
      priceScale: {
        position: 'right',
        // mode: 1,
        autoScale: false,
        // invertScale: true,
        alignLabels: true,
        borderVisible: false,
        borderColor: '#555ffd',
        scaleMargins: {
          top: 0.65,
          bottom: 0.25,
        },
        crosshair: {
          vertLine: {
            color: '#6A5ACD',
            width: 0.5,
            style: 1,
            visible: true,
            labelVisible: false,
          },
          horzLine: {
            color: '#6A5ACD',
            width: 0.5,
            style: 0,
            visible: true,
            labelVisible: true,
          },
          mode: 1,
        },
        grid: {
          vertLines: {
            color: 'rgba(70, 130, 180, 0.5)',
            style: 1,
            visible: true,
          },
          horzLines: {
            color: 'rgba(70, 130, 180, 0.5)',
            style: 1,
            visible: true,
          },
        },
      },
    });
    candlestickSeries = chart.addCandlestickSeries({
      upColor: '#0B6623',
      downColor: '#FF6347',
      borderVisible: false,
      wickVisible: true,
      borderColor: '#000000',
      wickColor: '#000000',
      borderUpColor: '#4682B4',
      borderDownColor: '#A52A2A',
      wickUpColor: '#4682B4',
      wickDownColor: '#A52A2A',
    });
  }, []);

  React.useEffect(() => {
    candlestickSeries.update(lastCandle);
  }, [lastCandle]);

  return (
    <>
      <div ref={myRef} id="chart" />
    </>
  );
};
