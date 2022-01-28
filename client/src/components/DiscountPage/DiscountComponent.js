import React from 'react';
import {FaCogs, FaTachometerAlt, FaGasPump, FaCheck} from 'react-icons/fa'
import Discount from '../../models/discount'
import './AccountComponent.css'
import accountJpg from '../../images/account/profilepicture.jpg';
import { Button, ButtonLink} from './AccountComponents'
import { ReactSession } from 'react-client-session'

import { faUser }  from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DiscountComponent = (props) => {

    let d = new Date(props.account.birth_date)

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    let formatted = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
    return (
        <div className="account-container">

        </div>
    )
};

export {DiscountComponent}