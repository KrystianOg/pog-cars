import React from 'react';
import {FaCogs, FaTachometerAlt, FaGasPump, FaCheck} from 'react-icons/fa'
import Account from '../../models/account'
import './AccountComponent.css'
import accountJpg from '../../images/account/profilepicture.jpg';
import { Button, ButtonLink} from './AccountComponents'
import { ReactSession } from 'react-client-session'

import { faUser }  from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AccountComponent = (account) => {

    account = account.account

    return (
        <div className="account-container">
            <div className="image">
                {/* tutaj zaimportowane zdjęcie */}
                <FontAwesomeIcon icon={faUser} className="user-icon"/>
            </div>

            <div className="account-info">
                <div className="account-firstname">
                    <h5>Imie: {account.firstname}</h5>
                </div>

                <div className="account-lastname">
                    <h5>Nazwisko: {account.lastname}</h5>
                </div>

                <div className="account-birth_date">
                    <h5>Data urodzenia: {account.birth_date}</h5>
                </div>

                <div className="account-nickname">
                    <h5>Pseudonim: {account.username}</h5>
                </div>

                <div className="account-email">
                    <h5>Poczta elektroniczna: {account.email}</h5>
                </div>
            </div>

            <Button>
                <ButtonLink to='/account/reserve'>Historia rezerwacji</ButtonLink>
            </Button>

            { ReactSession.get('user_id') == account.user_id ? 
            <Button>
                <ButtonLink to='/account/changedata'>Zmien moje dane</ButtonLink>
            </Button> : null }
            
            { ReactSession.get('user_id') == account.user_id ?
            <Button>
                <ButtonLink to='/account/resetpassword'>Nie pamiętam hasła</ButtonLink>
            </Button> : null }

        </div>
    )
};

export {AccountComponent}
