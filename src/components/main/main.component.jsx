import React, { Component } from 'react';
import './main.styles.scss';
import { createChart } from 'lightweight-charts';
import { getData, getSymbolData } from './utils.js';

import Select from 'react-select';
import AsyncSelect from 'react-select/async';

const symbolData = getSymbolData().then((data) => {
  // console.log(data);
  return data;
});

// console.log(symbolData);

class Main extends Component {
  ref = React.createRef();
  state = {};

  // constructor() {
  //   super();
  //   this.state = {};
  // }
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

    getData().then((data) => {
      // console.log(data);
      candleSeries.setData(data);
    });

    getSymbolData().then((data) => {
      // console.log(data);
      this.setState({ data });
    });
  }

  render() {
    const { data } = this.state;
    // console.log(this.state);
    return (
      <div className="main">
        <div className="trading">
          <div className="box one">
            {/* <Select options={this.state.data} /> */}
            <Select options={data} />
            {/* <AsyncSelect cacheOptions defaultOptions loadOptions={symbolData} /> */}
            {/* <AsyncSelect loadOptions={symbolData} /> */}
            {/* <AsyncSelect loadOptions={data} /> */}
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

// import React, { Component } from 'react';

// import AsyncSelect from 'react-select/async';
// import { colourOptions } from '../data';

// type State = {
//   inputValue: string,
// };

// const filterColors = (inputValue: string) => {
//   return colourOptions.filter(i =>
//     i.label.toLowerCase().includes(inputValue.toLowerCase())
//   );
// };

// const promiseOptions = inputValue =>
//   new Promise(resolve => {
//     setTimeout(() => {
//       resolve(filterColors(inputValue));
//     }, 1000);
//   });

// export default class WithPromises extends Component<*, State> {
//   state = { inputValue: '' };
//   handleInputChange = (newValue: string) => {
//     const inputValue = newValue.replace(/\W/g, '');
//     this.setState({ inputValue });
//     return inputValue;
//   };
//   render() {
//     return (
//       <AsyncSelect
//         cacheOptions
//         defaultOptions={colourOptions}
//         loadOptions={promiseOptions}
//       />
//     );
//   }
// }
