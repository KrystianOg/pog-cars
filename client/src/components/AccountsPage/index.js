import React from 'react';
import { AccountComponent } from './AccountComponent';
import './AccountComponent.css'

const AccountsContainer = () => {
    return (
        <div className="data">
            {/* automatyzacja tego */}
            <AccountComponent/>
        </div>
    )
};

export {AccountsContainer}
