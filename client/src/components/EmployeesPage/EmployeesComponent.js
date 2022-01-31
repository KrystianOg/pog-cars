
import './EmployeesComponent.css'
import { Button, ButtonLink} from './EmployeesComponents'
import React, {  useState, useEffect }  from 'react';
import { useNavigate } from 'react-router-dom'
import { ReactSession } from 'react-client-session';
import Select from 'react-select';
import {Button as MButton, TextField as MTextField} from '@mui/material';
import { DropDownList } from "@progress/kendo-react-dropdowns"; 
import {GLOBAL} from '../../config'


const EmployeesComponent = (props) => {

    
    const [employees,setEmployees] = useState(null);
    const navigate = useNavigate();
    const [loading,isLoading] = useState(true);
    let [del, setDelete] = useState(false)
    let [delCode, setDeleteCode] = useState(null)

    // Dropdown categories  
    //const categories = ["ADMIN", "AGENT", "CLIENT"];

    const user_type = [
        {
            id: 1,
            label: "ADMIN",
            //type: "type",
        },
        {
            id: 2,
            label: "AGENT",
            //type: "type",
        },
        {
            id: 3,
            label: "CLIENT",
            //type: "type",
        },
    ]
    

    const deleteEmployee = () => {
            //request
            fetch(`http://${GLOBAL.SERVER_IP}:${GLOBAL.SERVER_PORT}/users/delete=${props.employees.user_id}`,{
                "method": "PATCH",
                "headers": {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Access-Control-Allow-Origin": "no-cors"
                },
                "body": JSON.stringify({"user_id": ReactSession.get('user_id')})
            })
            .then(async response =>{
                //let [user_id,type]= await response.data
                if(response.status === 204){
                    props.employees.deleted = 1
                    setDelete(false)
                    setDeleteCode(null)
                    console.log("Employee deleted")
                }
            })
            .catch(err => console.log(err))
    }
    
 
    //let formatted = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
    return (
        <div classname="employees-container">
            <table>
            <tr>
            <th WIDTH="50">{props.employees.user_id}</th>
            <th WIDTH="100">{props.employees.firstname}</th>
            <th WIDTH="150">{props.employees.lastname}</th>
            <th WIDTH="100">{props.employees.username}</th>
            <th WIDTH="150">{props.employees.email}</th>
            <th WIDTH="50">{props.employees.type}</th>
            <th WIDTH="150">Twoja ocena pracownika</th>
            <th WIDTH="150">ocena klientów</th>
            
            <Button>
                <MButton type="submit" onClick={()=>deleteEmployee()}>Usuń użytkownika</MButton>
                <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                <Select options={user_type} />
                </div>
                <div className="col-md-4"></div>
                </div>
                <Button>Zmień typ użytkownika</Button>
            </Button>
            </tr>
            </table>
        </div>
    )
};

export {EmployeesComponent}