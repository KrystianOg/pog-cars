
import './EmployeesComponent.css'
import { Button, ButtonLink} from './EmployeesComponents'
import React, {  useState, useEffect }  from 'react';
import { useNavigate } from 'react-router-dom'
import {GLOBAL} from '../../config'


const EmployeesComponent = (props) => {

    
    const [employees,setEmployees] = useState(null);
    const navigate = useNavigate();
    const [loading,isLoading] = useState(true);
    

    useEffect(() =>{
        // + dane o ocenach

        
        const deleteEmployee = (user_id) => {
            return fetch(`http://${GLOBAL.SERVER_IP}:${GLOBAL.SERVER_PORT}/users/delete=:${props.employees.user_id}`,{
                "method": "PATCH",
                "headers": {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Access-Control-Allow-Origin": "no-cors"
                }
            })
            .then(async response =>{
                //let [user_id,type]= await response.data
                if(response.status !== 200){
                    navigate('/employees/', {replace: true})
                } else {
                    response = await response.json()
                    setEmployees(response)
                    isLoading(false)
                }
            })
            .catch(err => console.log(err))
        }
        deleteEmployee()
    },[])
    
 
    //let formatted = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
    return (
        <div>
            <tr>
            <th WIDTH="150">{props.employees.firstname}</th>
            <th WIDTH="200">{props.employees.lastname}</th>
            <th WIDTH="150">{props.employees.username}</th>
            <th WIDTH="250">{props.employees.email}</th>
            {props.employees.user_id}
            <th WIDTH="250">{props.employees.type}</th>
            <th WIDTH="250">Twoja ocena pracownika</th>
            <th WIDTH="250">ocena klientów</th>
            <Button>
                //<ButtonLink onClick={deleteEmployee}>Usuń konto</ButtonLink>
                <ButtonLink to='/account'>Zmień typ użytkownika</ButtonLink>
            </Button>

            </tr>
        </div>
    )
};

export {EmployeesComponent}