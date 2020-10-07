function timeConverter(unixTimestamp) {
  const a = new Date(unixTimestamp);
  const year = a.getFullYear();
  let month = a.getMonth();
  let day = a.getDate();

  // if (month < 10) {
  //   month = `0${month}`;
  // }

  // if (day < 10) {
  //   day = `0${day}`;
  // }
  const time = { year: year, month: month, day: day }; // June 1, 2019
  // const time = `${year}-${month}-${day}`;
  return time;
}
async function getData(symbol) {
  const response = await fetch(
    `http://localhost:3500/stock/app/${symbol ? symbol : 'bac'}`
  );
  const data = await response.json();
  // console.log('data webApiData from the back: ', data.webApiData);
  // console.log('data symbol from the back: ', data.symbol);
  // return data.webApiData.map((item) => ({
  //   time: timeConverter(item.time),
  //   open: item.open,
  //   high: item.high,
  //   low: item.low,
  //   close: item.close,
  // }));
  return data.webApiData;
}

async function getSymbolData(symbol) {
  const response = await fetch(
    `http://localhost:3500/stock/websearch/${symbol}`
  );
  const data = await response.json();
  // console.log('data webApiData from the back: ', data.webApiData);
  // console.log('data symbol from the back: ', data.symbol);
  return data;
}

function getCreateChart(ref, createChart) {
  // this.ref.current
  const chart = createChart(ref, {
    width: 900,
    height: 400,
    timeScale: {
      timeVisible: true,
      secondsVisible: false,
    },
  });

  const candleSeries = chart.addCandlestickSeries();
  return candleSeries;
}

export { getData, getSymbolData, getCreateChart };
