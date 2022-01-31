import React from 'react';
import './EmployeesComponent.css'
import { Button, ButtonLink} from './EmployeesComponents'


const EmployeesComponent = (props) => {
 
    //let formatted = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
    return (
        <div className="employees-container">
            <table>
            <tr>
            <th colspan="5">Nasi pracownicy</th>
            </tr>
            <tr>
            <th WIDTH="150">imie</th>
            <th WIDTH="200">nazwisko</th>
            <th WIDTH="150">nazwa użytkownika</th>
            <th WIDTH="250">adres email</th>
            <th WIDTH="250">Twoja ocena pracownika</th>
            <th WIDTH="250">ocena klientów</th>
            <Button>
                <ButtonLink to='/account'>Usuń konto</ButtonLink>
                <ButtonLink to='/account'>Zmień typ użytkownika</ButtonLink>
            </Button>

            </tr>

            <tr>
            <th WIDTH="150">imie</th>
            <th WIDTH="200">nazwisko</th>
            <th WIDTH="150">nazwa użytkownika</th>
            <th WIDTH="250">adres email</th>
            <th WIDTH="250">Twoja ocena pracownika</th>
            <th WIDTH="250">ocena klientów</th>
            <Button>
                <ButtonLink to='/account'>Usuń konto</ButtonLink>
                <ButtonLink to='/account'>Zmień typ użytkownika</ButtonLink>
            </Button>
            </tr>
            </table>

            <Button>
                <ButtonLink to='/account'>Powrót na stronę główną</ButtonLink>
            </Button>
        </div>
    )
};

export {EmployeesComponent}