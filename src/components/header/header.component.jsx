import React, { Component } from 'react';
import './header.styles.scss';

class Header extends Component {
  // constructor() {
  //   super();
  //   this.toggleClass = this.toggleClass.bind(this);
  // }

  state = {
    isActive: true,
  };

  toggleClass = () => {
    const { isActive } = this.state;
    this.setState({ isActive: !isActive });
  };

  render() {
    return (
      <React.Fragment>
        <div className={this.getIsActiveStatus()}>
          <div>
            <a href="#" onClick={this.toggleClass}>
              <i className={this.getOnOffToggle()}></i>
            </a>
          </div>
          <h1>CSS Grid - grid-template-areas</h1>
        </div>
      </React.Fragment>
    );
  }

  getOnOffToggle() {
    return this.state.isActive === true
      ? 'fas fa-toggle-on fa-2x'
      : 'fas fa-toggle-off fa-2x';
  }

  getIsActiveStatus() {
    return this.state.isActive === true ? 'header active' : 'header';
  }
}

export default Header;
