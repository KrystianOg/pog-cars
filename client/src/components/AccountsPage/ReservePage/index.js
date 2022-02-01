import React from 'react';
import { ReserveComponent } from './ReserveComponent';
import './ReserveComponent.css'
import { ReactSession } from 'react-client-session';

const ReserveContainer = () => {
    return (
        <div className="data">
            {/* automatyzacja tego */}
            <ReserveComponent params={ReactSession.user_id}/>
        </div>
    )
};

export {ReserveContainer}
