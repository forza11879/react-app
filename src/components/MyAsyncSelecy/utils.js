import { useState, useEffect } from 'react';

async function getData(url, symbol) {
  const response = await fetch(`${url}${symbol ? symbol : 'bac'}`);
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
  const chart = createChart(ref, {
    width: 900,
    height: 400,
    timeScale: {
      timeVisible: true,
      secondsVisible: false,
    },
  });
  return chart;
}

const useFetch = (url) => {
  const [chartData, setChartData] = useState({ data: [] });
  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        setChartData({ data: data.webApiData });
      });
  }, [url]);

  return chartData;
};

export { getData, getSymbolData, getCreateChart, useFetch };
