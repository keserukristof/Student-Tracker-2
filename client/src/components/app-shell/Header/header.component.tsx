import { FunctionComponent } from 'react';
import './header.component.scss';

import { Link } from 'react-router-dom';

export interface HeaderProps {
  title: string;
}

export const Header: FunctionComponent<HeaderProps> = ({ title }) => {
  return (
    <header>
      <Link to={'/'}>
        <h1>{title}</h1>
      </Link>
    </header>
  );
};