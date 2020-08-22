import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import AccountPage from './pages/account/account.component';
// import HomePage from './pages/account/account.component';

function App() {
  return (
    <React.Fragment>
      {/* // Switch prevents rendering multiple components */}
      <Switch>
        {/* <Route exact path="/" component={HomePage} /> */}
        <Route path="/chart" component={AccountPage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
