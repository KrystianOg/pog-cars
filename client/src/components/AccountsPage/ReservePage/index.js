import React from 'react';
import { ReserveComponent } from './ReserveComponent';
import './ReserveComponent.css'
import { ReactSession } from 'react-client-session';



const ReserveContainer = () => {

    const [cars,setCars] = useState(null);
    const navigate = useNavigate();
    const [loading,isLoading] = useState(true);

    /*
    return (
        <div className="reserve_history">
            {!loading ?
            <div className="reserve history">
                {reserve_history.map((reserve_history, i)=>
                    <reserve_history reserve_history={reserve_history}/>
                )}
                </div> : null}
        </div>
        )
        */
};

export {ReserveContainer}

/*
const loadReserve_history = () => {
    return fetch(`http://${GLOBAL.SERVER_IP}:${GLOBAL.SERVER_PORT}/users/${ReactSession.get('user_id')}`,{
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
loadReserve_history()
},[])

};
*/