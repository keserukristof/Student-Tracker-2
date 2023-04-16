import { FunctionComponent } from "react";
import './layout.component.scss';

import { Sidebar } from '../Sidebar/sidebar.component';
import { Header } from "../Header/header.component";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUsers } from '@fortawesome/free-solid-svg-icons';

export interface LayoutProps {
    children: JSX.Element;
}

const sideBarItems = [
    { title: 'Home', href: '/', icon: <FontAwesomeIcon icon={faHouse} /> },
    { title: 'Student tracker', href: '/student-tracker', icon: <FontAwesomeIcon icon={faUsers} /> },
];

export const Layout: FunctionComponent<LayoutProps> = ({
    children,
}) => {
    return (
        <div className="layout">
            <div className="header">
                <Header title="Student tracker" />
            </div>
            <div className="sidebar">
                <Sidebar sidebarItems={sideBarItems} />
            </div>
            <div className="content">
                {children}
            </div>
        </div>
    );
};