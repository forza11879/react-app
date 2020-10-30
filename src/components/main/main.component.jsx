import React, { useState, useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import './main.styles.scss';
import { createChart } from 'lightweight-charts';
import { getCreateChart, useFetch } from '../MyAsyncSelecy/utils.js';
import MyAsyncSelect from '../MyAsyncSelecy/my-async-select.component';
let chart = null;
function Main() {
  const ref = useRef();

  // @ts-ignore
  const [{ selectedSymbol }, setSelectedSymbol] = useState('');
  const [isClearable] = useState(true);

  const url = `${process.env.REACT_APP_URL_STOCK}${
    selectedSymbol ? selectedSymbol : 'f'
  }`;
  const { data } = useFetch(url);

  useEffect(() => {
    chart = getCreateChart(ref.current, createChart);
    let candleSeries = chart.addCandlestickSeries();
    candleSeries.setData(data);

    // @ts-ignore
    // ref.current.focus();

    return () => {
      if (chart !== null) {
        chart.remove();
        chart = null;
      }
    };
  }, [data, ref]);

  // useEffect(() => {
  //   getData(selectedSymbol).then((data) => {
  //     console.log(data);

  //     candleSeries.update(data);
  //   });
  // }, [selectedSymbol]);

  const onFocusedOptionChanged = (option) =>
    console.log('focused on: ', option);

  const onOptionSelected = (option) => {
    console.log('selected: ', option.label);

    // @ts-ignore
    setSelectedSymbol({ selectedSymbol: option.label }, () =>
      console.log('STATE selectedSymbol', selectedSymbol)
    );
  };

  return (
    <div className="main">
      <div className="trading">
        <div className="box one">
          <MyAsyncSelect
            // ref={inputRef}
            // @ts-ignore
            cacheOptions
            // defaultOptions={this.loadOptions} // loaded only on init
            isClearable={isClearable}
            onFocusedOptionChanged={onFocusedOptionChanged}
            onOptionSelected={onOptionSelected}
            // setIsClearable={setIsClearable}
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
}
// }

export default withRouter(Main);
