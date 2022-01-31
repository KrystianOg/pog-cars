import React, {useState} from 'react';
import FormLogin from '../components/Login/FormLogin';
import FormSuccess from '../components/Login/FormSuccess';
import '../components/Login/LoginForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import pogCars1 from '../images/pog-cars-1-white.svg';
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import { ReactSession } from 'react-client-session'
import {GLOBAL} from '../config'

const Login = () => {
    //something here
    const  [isSubmitted, setIsSubmitted] = useState(false)
    //const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
    
    async function submitForm(credentials){
        //call to api
        fetch(`http://${GLOBAL.SERVER_IP}:${GLOBAL.SERVER_PORT}/auth/login`,{
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "no-cors"
            },
            "body": JSON.stringify(credentials)
        })
        .then(async response =>{
            if(response.status !== 200){
                throw new Error("Wrong email or password")
            } else {
                response = await response.json()
                setIsSubmitted(true)
                ReactSession.set('user_id',response.user_id)
                ReactSession.set('type',response.type)
                navigate('/', {replace: true})
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <>
            <Helmet>
                <title>PogCars | Login</title>
                <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16"/>
            </Helmet>
            <div className="form-container">
                <span className="close-btn">
                    <a href="/">
                        <FontAwesomeIcon icon={faTimes} />
                    </a>
                </span>
                <div className="form-content-left">
                    <img src={pogCars1} alt="car" className="form-img"/>
                </div>
                {!isSubmitted ? <FormLogin submitForm={submitForm}/> : <FormSuccess/>}

            </div>
        </>
    );
};

export default Login;
