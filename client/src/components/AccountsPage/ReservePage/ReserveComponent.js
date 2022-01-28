import React, {useState, useEffect} from 'react';
import './ReserveComponent.css'
import { useNavigate } from 'react-router-dom'
import { Button, ButtonLink} from './ReserveComponents'
import RentalComponent from './RentalComponents'
import {GLOBAL} from '../../../config'
import { ReactSession } from 'react-client-session';

const ReserveComponent = (params) => {

    const [cars,setCars] = useState(null)
    const [agencies,setAgency] = useState(null)
    const [ratings,setRating] = useState(null)

    const navigate = useNavigate();
    const [loading,isLoading] = useState(true);

    let p = params

    useEffect(() =>{
        // + dane o ocenach

        const loadCars = () => {
            return fetch(`http://${GLOBAL.SERVER_IP}:${GLOBAL.SERVER_PORT}/rental_history/user=${ReactSession.get(params.user_id)}`,{
                "method": "GET",
                "headers": {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Access-Control-Allow-Origin": "no-cors"
                }, "body": JSON.stringify({ user_id : ReactSession.get('user_id')})
            })
            .then(async response =>{
                //let [user_id,type]= await response.data
                if(response.status !== 200){
                    navigate('/', {replace: true})
                } else {
                    response = await response.json()
                    setCars(response)
                    isLoading(false)
                }
            })
            .catch(err => console.log(err))
        }
        
        loadCars()
    },[])

    return (
        <div className="reserve-container">
            <table>
            <tr>
            <th colspan="7">Aktualne wypożyczenia</th>
            </tr>
            <tr>
                <th WIDTH="25">model</th>
                <th WIDTH="200">cena</th>
                <th WIDTH="150">miasto</th>
                <th WIDTH="300">początek wypożyczenia</th>
                <th WIDTH="300">koniec wypożyczenia</th>
                <th WIDTH="300">ocena użytkowników</th>
                <th WIDTH="300">Twoja ocena</th>
                <th WIDTH="300">Dodaj ocenę</th>
            </tr>

            <tr>
            <td WIDTH="25">Centro comercial Moctezuma</td>
                <td WIDTH="200">Francisco Chang</td>
                <td WIDTH="150">Mexico</td>
                <td WIDTH="300">Centro comercial Moctezuma</td>
                <td WIDTH="300">Francisco Chang</td>
                <td WIDTH="300">Mexico</td>
                <td WIDTH="300">Mexico</td>
                <Button><ButtonLink to='/account'>Dodaj ocenę</ButtonLink></Button>
            </tr>
            </table>

            <br></br>

            <hr align="left" width="90%"></hr>

            

            {!loading ? 
                <table>
                    <tr>
                    <th colspan="7">Historia wypożyczeń</th>
                    </tr>
                    <tr>
                        <th WIDTH="25">model</th>
                        <th WIDTH="200">cena</th>
                        <th WIDTH="150">miasto</th>
                        <th WIDTH="300">początek wypożyczenia</th>
                        <th WIDTH="300">koniec wypożyczenia</th>
                        <th WIDTH="300">ocena użytkowników</th>
                        <th WIDTH="300">Twoja ocena</th>
                    </tr>

                    {cars.map((car,i)=>{
                        <RentalComponent params={car} key={i}/>
                    })}
                </table> : null
                }
            <Button>
                <ButtonLink to='/account'>Powrót na stronę główną profilu</ButtonLink>
            </Button>
        </div>
    )
};

export {ReserveComponent}
