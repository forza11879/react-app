import React from 'react';
import './menu-item.styles.scss';
import { withRouter, Link } from 'react-router-dom';

const MenuItemOne = ({ icon, title, history, linkUrl, match }) => (
  <li className="tabIcon">
    <Link to={`/${linkUrl}`}>
      {/* <div
      onClick={
        () => history.push(`/${linkUrl}`)
        // console.log('HISTORY', history)
        // console.log('MATCH', match.url + linkUrl)
        // console.log('LINKURL', linkUrl)
      }
    > */}
      <span className="icon">
        <i className={`fas ${icon} fa-lg`}></i>
      </span>
      <span className="text">{title}</span>
      {/* </div> */}
    </Link>
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
    <Link to="#">
      <span className="icon">
        <i className={toggle ? getOnOffToggleCircle : icon}></i>
      </span>
      <span className="text">{title}</span>
    </Link>
  </li>
);

export default withRouter(MenuItemOne);

export { MenuItemTwo };
