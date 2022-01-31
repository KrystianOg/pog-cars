import React, {  useState, useEffect }  from 'react';
import { EmployeesComponent } from './EmployeesComponent';
import './EmployeesComponent.css'
import { AccountComponent} from '../AccountsPage/AccountComponent'
import { useNavigate } from 'react-router-dom'
import { ReactSession } from 'react-client-session'
import { EmployeesHeader } from './EmployeesHeader';
import { EmployeesFooter } from './EmployeesFooter';
import {GLOBAL} from '../../config'

const EmployeesContainer = () => {

    const [employees,setEmployees] = useState(null);
    const navigate = useNavigate();
    const [loading,isLoading] = useState(true);

    useEffect(() =>{
        // + dane o ocenach

        const loadUser = () => {
            return fetch(`http://${GLOBAL.SERVER_IP}:${GLOBAL.SERVER_PORT}/users/employees`,{
                "method": "GET",
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
        loadUser()
    },[])

    return (
        <>
            <EmployeesHeader/>
            {!loading ?
            <div className="employees">
                {/* automatyzacja tego */}
                {employees.map((user,i)=>
                    <EmployeesComponent employees={user} key={i}/>
                )}
            </div> : null}
            <EmployeesFooter/>
        </>
    )
};

export {EmployeesContainer}