import React from 'react';
import './EmployeesComponent.css'
import { Button, ButtonLink} from './EmployeesComponents'


const EmployeesComponent = (props) => {
 
    //let formatted = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
    return (
        <div>
            <tr>
            <th WIDTH="150">{props.employees.firstname}</th>
            <th WIDTH="200">{props.employees.lastname}</th>
            <th WIDTH="150">{props.employees.username}</th>
            <th WIDTH="250">{props.employees.email}</th>
            <th WIDTH="250">{props.employees.type}</th>
            <th WIDTH="250">Twoja ocena pracownika</th>
            <th WIDTH="250">ocena klientów</th>
            <Button>
                <ButtonLink onClick={}>Usuń konto</ButtonLink>
                <ButtonLink to='/account'>Zmień typ użytkownika</ButtonLink>
            </Button>

            </tr>
        </div>
    )
};

export {EmployeesComponent}