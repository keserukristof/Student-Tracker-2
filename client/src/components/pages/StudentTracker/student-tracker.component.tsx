import { FunctionComponent } from 'react';
import './student-tracker.component.scss';
import { StudentTable } from '../../../containers/student/StudentTable/student-table.component';

export const StudentTracker: FunctionComponent = () => {
    return (
        <div className='home-page'>
            <StudentTable />
        </div>
    );
};