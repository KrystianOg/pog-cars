import React, {useState} from 'react';
import FormSignup from '../components/Signup/FormSignup';
import FormSuccess from '../components/Signup/FormSuccess';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import '../components/Signup/SignupForm.css';
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import pogCars1 from '../images/pog-cars-1-white.svg';

const Register = () => {
    const  [isSubmitted, setIsSubmitted] = useState(false)
    const navigate = useNavigate()

    async function submitForm (values) {
        setIsSubmitted(true)        
        
        //on proper register call to api
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            'Access-Control-Allow-Origin': '*',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({  username: values.username,
                email: values.email,
                password: values.password})

        }

        fetch('http://localhost:5000/auth/register',requestOptions).then(async response =>{
            
            if(response.ok){
                const data = await response.json()
                console.log(data)
                navigate('/', {replace: true})
            }
        })

        console.log('Logged in')
    }

    return (
        <>
            <Helmet>
                <title>PogCars | Register</title>
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
                {!isSubmitted ? <FormSignup submitForm={submitForm}/> : <FormSuccess/>}
            </div>
        </>
    )
};

export default Register;