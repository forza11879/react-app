async function getData() {
  const response = await fetch('http://localhost:3500/stock/app/AAPL');
  const data = await response.json();
  // console.log('data webApiData from the back: ', data.webApiData);
  // console.log('data symbol from the back: ', data.symbol);
  return data.webApiData;
}

async function getSymbolData() {
  const response = await fetch('http://localhost:3500/stock/websearch/TS');
  const data = await response.json();
  // console.log('data webApiData from the back: ', data.webApiData);
  // console.log('data symbol from the back: ', data.symbol);
  return data;
}

export { getData, getSymbolData };
