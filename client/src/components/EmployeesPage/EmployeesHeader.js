import React from 'react';
import './EmployeesComponent.css'
import { Button, ButtonLink} from './EmployeesComponents'

const EmployeesHeader = () => {
    //const {handleChange,values,handleSubmit,errors} = useCarFilterForm(submit, validateInfo);

    return (
        <form className="table">
            <table>
            <tr>
            <th colspan="5">Nasi pracownicy</th>
            </tr>
            <tr>
            <th WIDTH="150">imię</th>
            <th WIDTH="200">nazwisko</th>
            <th WIDTH="150">nazwa użytkownika</th>
            <th WIDTH="250">adres email</th>
            <th WIDTH="250">Twoja ocena pracownika</th>
            <th WIDTH="250">ocena klientów</th>
            </tr>
            </table>
        </form>
    )
};

export {EmployeesHeader};