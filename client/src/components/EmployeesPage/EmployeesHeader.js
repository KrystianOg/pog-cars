import React from 'react';
import './EmployeesComponent.css'
import { Button, ButtonLink} from './EmployeesComponents'

const EmployeesHeader = () => {
    //const {handleChange,values,handleSubmit,errors} = useCarFilterForm(submit, validateInfo);

    return (
        <form className="table">
            <table>
            <tr>
                <th colspan="8">Nasi pracownicy</th>
            </tr>
            <tr>
            <th WIDTH="150">imię</th>
            <th WIDTH="150">Nazwisko</th>
            <th WIDTH="100">nazwa użytkownika</th>
            <th WIDTH="250">adres email</th>
            <th width="50">typ</th>
            <th WIDTH="150">Twoja ocena pracownika</th>
            <th WIDTH="150">ocena klientów</th>
            <th width="480">opcje</th>
            </tr>
            </table>
        </form>
    )
};

export {EmployeesHeader};