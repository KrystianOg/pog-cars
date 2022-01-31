import React from 'react';
import './EmployeesComponent.css'
import { Button, ButtonLink} from './EmployeesComponents'

const EmployeesFooter = () => {
    return (
    <form className="table">
    <Button>
    <ButtonLink to='/'>Powrót na stronę główną</ButtonLink>
    </Button>
    </form>
)};

export {EmployeesFooter};

