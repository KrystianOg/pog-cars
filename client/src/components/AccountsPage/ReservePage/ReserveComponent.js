import React from 'react';
import {FaCogs, FaTachometerAlt, FaGasPump, FaCheck} from 'react-icons/fa'
import Account from '../../../models/account'
import './ReserveComponent.css'
import { Button, ButtonLink} from './ReserveComponents'

const ReserveComponent = (account, days) => {

    let a = new Account('Anna', 'Stawska', '05.06.1976', 'anna1976', 'poczta@jakas.tam', 'klient', false, 'aaaaa', 'a&7gv6H{g4');


    return (
        <div className="reserve-container">
            <table>
            <tr>
            <th colspan="8">Aktualne wypożyczenia</th>
            </tr>
            <tr>
                <th WIDTH="150">model</th>
                <th WIDTH="200">cena</th>
                <th WIDTH="200">miasto</th>
                <th WIDTH="300">początek wypożyczenia</th>
                <th WIDTH="300">koniec wypożyczenia</th>
                <th WIDTH="250">ocena użytkowników</th>
                <th WIDTH="250">Twoja ocena</th>
                <th WIDTH="75">Dodaj ocenę</th>
            </tr>

            <tr>
            <td WIDTH="150">Centro comercial Moctezuma</td>
            <td WIDTH="200">Francisco Chang</td>
            <td WIDTH="200">Mexico</td>
            <td WIDTH="300">Centro comercial Moctezuma</td>
            <td WIDTH="300">Francisco Chang</td>
            <td WIDTH="250">Mexico</td>
            <td WIDTH="250">Mexico</td>
            <Button><ButtonLink to='/account'>Dodaj ocenę</ButtonLink></Button>
            </tr>
            </table>

            <br></br>

            <hr align="left" width="90%"></hr>

            <br></br>

            <table>
            <tr>
            <th colspan="8">Aktualne wypożyczenia</th>
            </tr>
            <tr>
                <th WIDTH="150">model</th>
                <th WIDTH="200">cena</th>
                <th WIDTH="200">miasto</th>
                <th WIDTH="300">początek wypożyczenia</th>
                <th WIDTH="300">koniec wypożyczenia</th>
                <th WIDTH="250">ocena użytkowników</th>
                <th WIDTH="250">Twoja ocena</th>
                <th WIDTH="75">Dodaj ocenę</th>
            </tr>

            <tr>
                <td WIDTH="150">Centro comercial Moctezuma</td>
                <td WIDTH="200">Francisco Chang</td>
                <td WIDTH="200">Mexico</td>
                <td WIDTH="300">Centro comercial Moctezuma</td>
                <td WIDTH="300">Francisco Chang</td>
                <td WIDTH="250">Mexico</td>
                <td WIDTH="250">Mexico</td>
                <Button><ButtonLink to='/account'>Dodaj ocenę</ButtonLink></Button>
            </tr>
            </table>

            <Button>
                <ButtonLink to='/account'>Powrót na stronę główną profilu</ButtonLink>
            </Button>
        </div>
    )
};

export {ReserveComponent}
