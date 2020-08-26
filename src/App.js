import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import AccountPage from './pages/account/account.component.jsx';
import StockPage from './pages/stock/stock.component.jsx';

function App() {
  return (
    <React.Fragment>
      {/* // Switch prevents rendering multiple components */}
      <Switch>
        {/* <Route exact path="/" component={HomePage} /> */}
        <Route exact={true} path="/" component={AccountPage} />
        <Route path="/stock" component={StockPage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
