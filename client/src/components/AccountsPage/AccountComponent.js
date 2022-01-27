import React from 'react';
import {FaCogs, FaTachometerAlt, FaGasPump, FaCheck} from 'react-icons/fa'
import Account from '../../models/account'
import './AccountComponent.css'
import accountJpg from '../../images/account/profilepicture.jpg';
import { Button, ButtonLink} from './AccountComponents'
import { ReactSession } from 'react-client-session'

import { faUser }  from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AccountComponent = (props) => {

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
            <div className="image">
                {/* tutaj zaimportowane zdjęcie */}
                <FontAwesomeIcon icon={faUser} className="user-icon"/>
            </div>

            <div className="account-info">
                <div className="account-firstname">
                    <h5>Imie: {props.account.firstname}</h5>
                </div>

                <div className="account-lastname">
                    <h5>Nazwisko: {props.account.lastname}</h5>
                </div>

                <div className="account-birth_date">
                    <h5>Data urodzenia: {formatted}</h5>
                </div>

                <div className="account-nickname">
                    <h5>Pseudonim: {props.account.username}</h5>
                </div>

                <div className="account-email">
                    <h5>Poczta elektroniczna: {props.account.email}</h5>
                </div>
            </div>

            <Button>
                <ButtonLink to='/account/reserve'>Historia rezerwacji</ButtonLink>
            </Button>

            { ReactSession.get('user_id') == props.account.user_id ? 
            <Button>
                <ButtonLink to='/account/changedata'>Zmien moje dane</ButtonLink>
            </Button> : null }
            
            { ReactSession.get('user_id') == props.account.user_id ?
            <Button>
                <ButtonLink to='/account/resetpassword'>Nie pamiętam hasła</ButtonLink>
            </Button> : null }

        </div>
    )
};

export {AccountComponent}
