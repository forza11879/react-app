import React, { Component } from 'react';
import './sidebar.styles.scss';

class Sidebar extends Component {
  state = {
    isActive: true,
  };

  toggleClassCircle = () => {
    const { isActive } = this.state;
    this.setState({ isActive: !isActive });
  };

  render() {
    return (
      <div className={this.getIsActiveStatusCircle()}>
        <ul className="menu menuOne">
          <li className="tabIcon">
            <a href="/">
              <span className="icon">
                <i className="fas fa-bars fa-lg"></i>
              </span>
              <span className="text">Options</span>
            </a>
          </li>
          <li className="tabIcon">
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

        <ul className="menu menuTwo">
          <li className="tabIcon circle" onClick={this.toggleClassCircle}>
            <a href="#">
              <span className="icon">
                <i className={this.getOnOffToggleCircle()}></i>
              </span>
              <span className="text">Buy/Sell</span>
            </a>
          </li>
          <li className="tabIcon">
            <a href="/">
              <span className="icon">
                <i className="fas fa-sign-out-alt fa-lg"></i>
              </span>
              <span className="text">Sign-out</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }

  getOnOffToggleCircle() {
    return this.state.isActive === true
      ? 'fas fa-minus-circle fa-lg'
      : 'fas fa-plus-circle fa-lg';
  }

  getIsActiveStatusCircle() {
    return this.state.isActive === true
      ? 'panel sidebar active'
      : 'panel sidebar';
  }
}

export default Sidebar;
