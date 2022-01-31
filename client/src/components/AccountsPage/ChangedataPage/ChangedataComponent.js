import React from 'react';
import {FaCogs, FaTachometerAlt, FaGasPump, FaCheck} from 'react-icons/fa'
import Account from '../../../models/account';
import './ChangedataComponent.css'
import { Button, ButtonLink} from './ChangedataComponents'


const ChangedataComponent = (account, days) => {

    let a = new Account('Anna', 'Stawska', '05.06.1976', 'anna1976', 'poczta@jakas.tam', 'klient', false, 'aaaaa', 'a&7gv6H{g4');


    return (
        <div className="account-container">

            Nowe imię:
            <input type="text" id="txt" name="txt" maxlength="25"/>

            Nowe nazwisko:
            <input type="text" id="txt" name="txt" maxlength="25"/>

            Nowa data urodzenia:
            <input type="text" id="txt" name="txt" maxlength="15"/>

            Nowy pseudonim:
            <input type="text" id="txt" name="txt" minlength="5" maxlength="20"/>
            
            Wpisz swoje hasło:
            <input type="password" id="pwd" name="pwd" minlength="5" maxlength="20"/>

            <Button>
                <ButtonLink to='/account'>Potwierdź</ButtonLink>
                <ButtonLink to='/account'>Anuluj</ButtonLink>
            </Button>
        </div>
    )
};

export {ChangedataComponent}
