import React, { Component } from 'react';
import './main.styles.scss';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="trading">
          <div className="box one">1</div>
          <div className="box two">2</div>
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
