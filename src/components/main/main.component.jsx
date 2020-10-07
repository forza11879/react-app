import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import './main.styles.scss';
import { createChart } from 'lightweight-charts';
import { getData, getCreateChart } from '../MyAsyncSelecy/utils.js';
import MyAsyncSelect from '../MyAsyncSelecy/my-async-select.component';

// let candleSeries;
function Main() {
  const ref = React.createRef();
  const [selectedSymbol, setSelectedSymbol] = useState('');
  const [isClearable] = useState(true);

  useEffect(() => {
    // candleSeries = getCreateChart(ref.current, createChart);

    let chart = createChart(ref.current, {
      width: 900,
      height: 400,
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
    });

    let candleSeries = chart.addCandlestickSeries();

    getData(selectedSymbol).then((data) => {
      // console.log(data);
      candleSeries.setData(data);
    });
    console.log('STATE from DidMount', selectedSymbol);
    console.log('RENDER Parent');

    return () => {
      if (chart !== null) {
        chart.remove();
        chart = null;
      }
    };
  }, [ref, selectedSymbol]);

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
    setSelectedSymbol({ selectedSymbol: option.label }, () =>
      console.log('STATE selectedSymbol', selectedSymbol)
    );
  };

  return (
    <div className="main">
      <div className="trading">
        <div className="box one">
          <MyAsyncSelect
            cacheOptions
            // defaultOptions={this.loadOptions} // loaded only on init
            isClearable={isClearable}
            onFocusedOptionChanged={onFocusedOptionChanged}
            onOptionSelected={onOptionSelected}
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
