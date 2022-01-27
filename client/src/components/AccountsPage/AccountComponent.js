import React from 'react';
import {FaCogs, FaTachometerAlt, FaGasPump, FaCheck} from 'react-icons/fa'
import Account from '../../models/account'
import './AccountComponent.css'
import accountJpg from '../../images/account/profilepicture.jpg';
import { Button, ButtonLink} from './AccountComponents'

const AccountComponent = (account, days) => {

    let a = new Account('Anna', 'Stawska', '05.06.1976', 'anna1976', 'poczta@jakas.tam', 'klient', false, 'aaaaa', 'a&7gv6H{g4');


    return (
        <div className="account-container">
            <div className="image">
                {/* tutaj zaimportowane zdjęcie */}\
                <img src={accountJpg} alt="account"/>
            </div>


            <div className="account-info">
                <div className="account-firstname">
                    <h5>Imie: {a.firstname}</h5>
                </div>

                <div className="account-lastname">
                    <h5>Nazwisko: {a.lastname}</h5>
                </div>

                <div className="account-birth_date">
                    <h5>Data urodzenia: {a.birth_date}</h5>
                </div>

                <div className="account-nickname">
                    <h5>Pseudonim: {a.username}</h5>
                </div>

                <div className="account-email">
                    <h5>Poczta elektroniczna: {a.email}</h5>
                </div>
            </div>

            <Button>
                <ButtonLink to='/account/reserve'>Historia rezerwacji</ButtonLink>
            </Button>

            <Button>
                <ButtonLink to='/account/changedata'>Zmien moje dane</ButtonLink>
            </Button>

            <Button>
                <ButtonLink to='/account/resetpassword'>Nie pamiętam hasła</ButtonLink>
            </Button>

        </div>
    )
};

export {AccountComponent}
