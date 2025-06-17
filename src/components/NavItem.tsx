import React from 'react';
import { NavItemProps } from '../types';

const NavItem: React.FC<NavItemProps> = ({ href, children }) => {
  return (
    <li className="nav-item">
      <a
        className="nav-link fw-medium px-3 py-2 mx-1 rounded-3 text-decoration-none text-primary"
        href={href}
      >
        {children}
      </a>
    </li>
  );
};

export default NavItem;
