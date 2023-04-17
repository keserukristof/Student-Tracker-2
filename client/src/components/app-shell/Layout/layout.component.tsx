import { FunctionComponent } from "react";
import './layout.component.scss';

import { Routes, Route } from "react-router-dom";

import { Home } from '../../pages/Home/home.component';
import { StudentTracker } from '../../pages/StudentTracker/student-tracker.component';
import { Sidebar } from '../Sidebar/sidebar.component';
import { Header } from "../Header/header.component";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUsers } from '@fortawesome/free-solid-svg-icons';

const sideBarItems = [
    { title: 'Home', href: '/', icon: <FontAwesomeIcon icon={faHouse} /> },
    { title: 'Student tracker', href: '/student-tracker', icon: <FontAwesomeIcon icon={faUsers} /> },
];

export const Layout: FunctionComponent = () => {
    return (
        <div className="layout">
            <div className="header">
                <Header title="Student tracker" />
            </div>
            <div className="sidebar">
                <Sidebar sidebarItems={sideBarItems} />
            </div>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/student-tracker" element={<StudentTracker />} />
                </Routes>
            </div>
        </div>
    );
};