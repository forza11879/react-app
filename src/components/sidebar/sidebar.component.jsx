import React, { Component } from 'react';
import './sidebar.styles.scss';

class Sidebar extends Component {
  render() {
    return (
      <div className="panel sidebar">
        <ul className="menu">
          <li>
            <a href="/">
              <span className="icon">
                <i className="fas fa-folder-open fa-lg"></i>
              </span>
              <span className="text">Account</span>
            </a>
          </li>
          <li className="tabIcon">
            <a href="/">
              <span className="icon">
                <i className="fas fa-binoculars fa-lg"></i>
              </span>
              <span className="text">Watchlist</span>
            </a>
          </li>
          <li className="tabIcon">
            <a href="/" className="active">
              <span className="icon">
                <i className="fas fa-chart-line fa-lg"></i>
              </span>
              <span className="text">Stocks</span>
            </a>
          </li>
          <li className="tabIcon">
            <a href="/">
              <span className="icon">
                <i className="fas fa-th fa-lg"></i>
              </span>
              <span className="text">Options</span>
            </a>
          </li>
          <li className="tabIcon">
            <a href="/">
              <span className="icon">
                <i className="fas fa-satellite fa-lg"></i>
              </span>
              <span className="text">News</span>
            </a>
          </li>
          <li className="tabIcon">
            <a href="/">
              <span className="icon">
                <i className="fas fa-sliders-h fa-lg"></i>
              </span>
              <span className="text">Settings</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
