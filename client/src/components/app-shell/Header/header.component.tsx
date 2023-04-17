import { FunctionComponent } from 'react';
import './header.component.scss';

export interface HeaderProps {
  title: string;
}

export const Header: FunctionComponent<HeaderProps> = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};