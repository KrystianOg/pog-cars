import React, {  useState, useEffect }  from 'react';
import { DiscountComponent } from './DiscountComponent';
import './DiscountComponent.css'
import { useNavigate } from 'react-router-dom'
import { ReactSession } from 'react-client-session'
import {GLOBAL} from '../../config'

const DiscountContainer = () => {

    return (
        <div className="data">
            {/* automatyzacja tego */}
            <DiscountComponent/>
        </div>
    )

    //zostawilem to zakomentowane, bo ja jestem zbyt duzym betonem, zeby to zaimplementowac
    /*
    const [user,setUser] = useState(null);
    const navigate = useNavigate();
    const [loading,isLoading] = useState(true);

    useEffect(() =>{
        // + dane o ocenach

        
        const loadUser = () => {
            return fetch(`http://192.168.0.102:5000/users/${ReactSession.get('user_id')}`,{
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
                    navigate('/', {replace: true})
                } else {
                    response = await response.json()
                    setUser(response[0])
                    isLoading(false)
                }
            })
            .catch(err => console.log(err))
        }
        loadUser()
    },[])

    return (
        <div className="data">
            { automatyzacja tego }
            {!loading ?
            <DiscountComponent account={user}/> : null }
            { jakiś footer }
        </div>
    )
    */
};

export {DiscountContainer}