import { FunctionComponent } from 'react';
import './home.component.scss';

import { Widget } from '../../common/Widget/widget.component';

export interface HomeProps {
    title: string;
}

export const Home: FunctionComponent<HomeProps> = ({ title }) => {
    return (
        <div className='home-page'>
            <div className='student-widget'>
                <Widget title='Example'>
                    <div>EXAMPLE TEXT</div>
                </Widget>
            </div>
            <div className='student-widget'>
                <Widget title='Example'>
                    <div>EXAMPLE TEXT</div>
                </Widget>
            </div>
            <div className='student-widget'>
                <Widget title='Example'>
                    <div>EXAMPLE TEXT</div>
                </Widget>
            </div>
            <div className='student-widget'>
                <Widget title='Example'>
                    <div>EXAMPLE TEXT</div>
                </Widget>
            </div>
            <div className='student-widget'>
                <Widget title='Example'>
                    <div>EXAMPLE TEXT</div>
                </Widget>
            </div>
            <div className='student-widget'>
                <Widget title='Example'>
                    <div>EXAMPLE TEXT</div>
                </Widget>
            </div>
            
        </div>
    );
};