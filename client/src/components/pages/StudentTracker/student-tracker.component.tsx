import { FunctionComponent } from 'react';
import './student-tracker.component.scss';

import { Widget } from '../../common/Widget/widget.component';


export const StudentTracker: FunctionComponent = () => {
    return (
        <div className='home-page'>
            <div className='student-widget'>
                <Widget title='Example'>
                    <div>EXAMPLE TEXT</div>
                </Widget>
            </div>
        </div>
    );
};