async function getData(symbol) {
  const response = await fetch(
    `http://localhost:3500/stock/app/${symbol ? symbol : 'bac'}`
  );
  const data = await response.json();
  // console.log('data webApiData from the back: ', data.webApiData);
  // console.log('data symbol from the back: ', data.symbol);
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
