import { FunctionComponent } from 'react';

export interface NavbarProps {
    navBarItems?: string[];
}

export const NavbarComponent: FunctionComponent<NavbarProps> = ({
    navBarItems
}) => {
    return (
        <nav className="navbar">
          <ul className="navbar__list">
            <li className="navbar__item"> <a href="/">Home</a> </li>
          </ul>
        </nav>
      );
};