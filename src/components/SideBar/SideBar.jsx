import React from 'react';
import { Link } from 'react-scroll';

import './SideBar.scss';

const SideBar = ({ openSidebar, animate }) => {
  return (
    <ul
      className={
        'toggle ' + (animate ? 'app__menu-sidebar open ' : 'app__menu-sidebar')
      }
    >
      {['home', 'oferta', 'opinie', 'cennik', 'o mnie', 'blog', 'kontakt'].map(
        (item) => (
          <li key={item}>
            <Link to={item} spy={true} offset={-100} onClick={openSidebar}>
              {item}
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

export default SideBar;
