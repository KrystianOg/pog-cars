import React from 'react';
import {FaCogs, FaTachometerAlt, FaGasPump, FaCheck} from 'react-icons/fa'
import Account from 'C:/Users/Kornel/pog-cars/client/src/models/account.js'
import './ReserveComponent.css'
import { Button, ButtonLink} from './ReserveComponents'

const ReserveComponent = (account, days) => {

    let a = new Account('Anna', 'Stawska', '05.06.1976', 'anna1976', 'poczta@jakas.tam', 'klient', false, 'aaaaa', 'a&7gv6H{g4');


    return (
        <div className="reserve-container">
            <table>
            <tr>
            <th colspan="7">Aktualne wypożyczenia</th>
            </tr>
            <tr>
                <th WIDTH="25">model</th>
                <th WIDTH="200">cena</th>
                <th WIDTH="150">miasto</th>
                <th WIDTH="300">początek wypożyczenia</th>
                <th WIDTH="300">koniec wypożyczenia</th>
                <th WIDTH="300">ocena użytkowników</th>
                <th WIDTH="300">Twoja ocena</th>
                <th WIDTH="300">Dodaj ocenę</th>
            </tr>

            <tr>
            <td WIDTH="25">Centro comercial Moctezuma</td>
                <td WIDTH="200">Francisco Chang</td>
                <td WIDTH="150">Mexico</td>
                <td WIDTH="300">Centro comercial Moctezuma</td>
                <td WIDTH="300">Francisco Chang</td>
                <td WIDTH="300">Mexico</td>
                <td WIDTH="300">Mexico</td>
                <Button><ButtonLink to='/account'>Dodaj ocenę</ButtonLink></Button>
            </tr>
            </table>

            <br></br>

            <hr align="left" width="90%"></hr>

            <table>
            <tr>
            <th colspan="7">Aktualne wypożyczenia</th>
            </tr>
            <tr>
                <th WIDTH="25">model</th>
                <th WIDTH="200">cena</th>
                <th WIDTH="150">miasto</th>
                <th WIDTH="300">początek wypożyczenia</th>
                <th WIDTH="300">koniec wypożyczenia</th>
                <th WIDTH="300">ocena użytkowników</th>
                <th WIDTH="300">Twoja ocena</th>
                <th WIDTH="300">Dodaj ocenę</th>
            </tr>

            <tr>
                <td WIDTH="25">Centro comercial Moctezuma</td>
                <td WIDTH="200">Francisco Chang</td>
                <td WIDTH="150">Mexico</td>
                <td WIDTH="300">Centro comercial Moctezuma</td>
                <td WIDTH="300">Francisco Chang</td>
                <td WIDTH="300">Mexico</td>
                <td WIDTH="300">Mexico</td>
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
