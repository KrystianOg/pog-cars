import React from 'react';
import {FaCogs, FaTachometerAlt, FaGasPump, FaCheck} from 'react-icons/fa'
import Account from 'C:/Users/Kornel/pog-cars/client/src/models/account.js'
import './ResetpasswordComponent.css'
import { Button, ButtonLink} from './ResetpasswordComponents'

const ResetpasswordComponent = (account, days) => {

    let a = new Account('Anna', 'Stawska', '05.06.1976', 'anna1976', 'poczta@jakas.tam', 'klient', false, 'aaaaa', 'a&7gv6H{g4');


    return (
        <div className="account-container">

            Nowe hasło:
            <input type="password" id="txt" name="txt" minlength="8" maxlength="25"/>

            Powtórz nowe hasło:
            <input type="password" id="txt" name="txt" minlength="8" maxlength="25"/>

            <Button>
                <ButtonLink to='/account'>Potwierdź</ButtonLink>
                <ButtonLink to='/account'>Anuluj</ButtonLink>
            </Button>
        </div>
    )
};

export {ResetpasswordComponent}
