import { FunctionComponent } from 'react';
import './widget.component.scss';

export interface WidgetProps {
    title: string;
    children: JSX.Element;
}

export const Widget: FunctionComponent<WidgetProps> = ({
    title,
    children,
}) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <div className='card-content'>
                {children}
            </div>
        </div>
    );
};