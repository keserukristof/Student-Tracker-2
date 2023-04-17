import { FunctionComponent } from 'react';
import './sidebar.component.scss';
import { NavbarItem } from './models/sidebar-item.model';

export interface NavbarProps {
  sidebarItems: NavbarItem[];
}

export const Sidebar: FunctionComponent<NavbarProps> = ({
  sidebarItems
}) => {
  return (
    <nav>
      <ul>
        {sidebarItems.map(({ href, icon, title }, index) => (
          <a href={href} className="nav-link">
            <li key={index}>
              {icon}{title}
            </li>
          </a>
        ))}
      </ul>
    </nav>
  );
};
