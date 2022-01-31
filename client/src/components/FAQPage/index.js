import React, {  useState, useEffect }  from 'react';
import { FAQComponent } from './FAQComponent';
import './FAQComponent.css'
import { useNavigate } from 'react-router-dom'
import { ReactSession } from 'react-client-session'
import {GLOBAL} from '../../config'

const FAQContainer = () => {

    return (
        <div className="data">
            {/* automatyzacja tego */}
            <FAQComponent/>
        </div>
    )

};

export {FAQContainer}