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

export { getData, getSymbolData };
