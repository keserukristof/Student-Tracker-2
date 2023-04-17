import { FunctionComponent } from 'react';
import './sidebar.component.scss';

import { Link, useLocation } from 'react-router-dom';

import { NavbarItem } from './models/sidebar-item.model';

export interface NavbarProps {
  sidebarItems: NavbarItem[];
}

export const Sidebar: FunctionComponent<NavbarProps> = ({ sidebarItems }) => {
  const location = useLocation();

  return (
    <nav>
      <ul>
        {sidebarItems.map(({ href, icon, title }, index) => (
          <Link to={href} className={`nav-link ${location.pathname === href ? 'active-nav-item' : ''}`} key={index}>
            <li>
              {icon}{title}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};