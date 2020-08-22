import React, { Component } from 'react';
import './sidebar.styles.scss';
import { menuItemsOne, menuItemsTwo } from './utils.js';
import { MenuItemOne, MenuItemTwo } from './MenuItem/menu-item.component';

class Sidebar extends Component {
  state = {
    isActive: true,
    sectionsone: menuItemsOne,
    sectionstwo: menuItemsTwo,
  };

  toggleClassCircle = () => {
    const { isActive } = this.state;
    this.setState({ isActive: !isActive });
  };

  render() {
    return (
      <div className={this.getIsActiveStatusCircle()}>
        <ul className="menu menuOne">
          {this.state.sectionsone.map(({ id, ...otherSectionProps }) => (
            <MenuItemOne key={id} {...otherSectionProps} />
          ))}
        </ul>

        <ul className="menu menuTwo">
          {this.state.sectionstwo.map(({ id, ...otherSectionProps }) => (
            <MenuItemTwo
              key={id}
              {...otherSectionProps}
              getOnOffToggleCircle={this.getOnOffToggleCircle()}
              toggleClassCircle={this.toggleClassCircle}
            />
          ))}
        </ul>
      </div>
    );
  }

  getOnOffToggleCircle() {
    return this.state.isActive === true
      ? 'fas fa-plus-circle fa-lg'
      : 'fas fa-minus-circle fa-lg';
  }

  getIsActiveStatusCircle() {
    return this.state.isActive === true
      ? 'panel sidebar active'
      : 'panel sidebar';
  }
}

export default Sidebar;
