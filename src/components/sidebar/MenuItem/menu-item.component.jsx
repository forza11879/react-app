import React from 'react';
import './menu-item.styles.scss';

const MenuItemOne = ({ icon, title }) => (
  <li className="tabIcon">
    <a href="/">
      <span className="icon">
        <i className={`fas ${icon} fa-lg`}></i>
      </span>
      <span className="text">{title}</span>
    </a>
  </li>
);

const MenuItemTwo = ({
  icon,
  title,
  toggle,
  getOnOffToggleCircle,
  toggleClassCircle,
}) => (
  <li
    className={`tabIcon ${toggle ? 'circle' : ''}`}
    onClick={toggle ? toggleClassCircle : null}
  >
    <a href="#">
      <span className="icon">
        <i className={toggle ? getOnOffToggleCircle : icon}></i>
      </span>
      <span className="text">{title}</span>
    </a>
  </li>
);

export { MenuItemOne, MenuItemTwo };
