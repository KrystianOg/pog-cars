import React from 'react';
import {FaCogs, FaTachometerAlt, FaGasPump, FaCheck} from 'react-icons/fa'
import Account from '../../../models/account';
import './ChangedataComponent.css'
import { Button, ButtonLink} from './ChangedataComponents'


const ChangedataComponent = (props) => {


    return (
        <div className="account-container">

            Nowe imię:
            <input type="text" id="txt" name="txt" maxlength="25"/>

            Nowe nazwisko:
            <input type="text" id="txt" name="txt" maxlength="25"/>

            Nowy pseudonim:
            <input type="text" id="txt" name="txt" minlength="5" maxlength="20"/>
            
            Wpisz swoje hasło:
            <input type="password" id="pwd" name="pwd" minlength="8" maxlength="32"/>

            <Button>
                <ButtonLink to='/account'>Potwierdź</ButtonLink>
                <ButtonLink to='/account'>Anuluj</ButtonLink>
            </Button>
        </div>
    )
};

export {ChangedataComponent}
