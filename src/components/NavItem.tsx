import React from 'react';
import { NavItemProps } from '../types';

const NavItem: React.FC<NavItemProps> = ({ href, children}) => {
  const combinedClasses =
    `nav-link fw-medium px-3 py-2 mx-1 rounded-3 text-decoration-none  ''
  }`.trim();

  return (
    <li className="nav-item">
      <a className={combinedClasses} href={href}>
        {children}
      </a>
    </li>
  );
};

export default NavItem; 