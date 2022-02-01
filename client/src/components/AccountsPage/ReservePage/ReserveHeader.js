import React from 'react';
import './ReserveComponent.css'
import { Button, ButtonLink} from './ReserveComponents'

const ReserveHeader1 = () => {
    return (
    <form className="table">
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
            </table>
    </form>
)};

const ReserveHeader2 = () => {
    return (
    <form className="table">
                    <table>
            <tr>
            <th colspan="8">Nieaktualne wypożyczenia</th>
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
            </table>

    </form>
)};

export {ReserveHeader1, ReserveHeader2};

