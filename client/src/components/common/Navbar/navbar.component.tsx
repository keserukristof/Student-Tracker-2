import { FunctionComponent } from 'react';
import './navbar.component.scss';
import { NavbarItem } from './models/navbar-item.model';

export interface NavbarProps {
  navBarItems: NavbarItem[];
}

export const NavbarComponent: FunctionComponent<NavbarProps> = ({
  navBarItems
}) => {
  return (
    <nav>
      <ul>
        {navBarItems.map(({href, icon, title}, index) => (
          <li key={index}>
            {icon}
            <a href={href}>{title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
