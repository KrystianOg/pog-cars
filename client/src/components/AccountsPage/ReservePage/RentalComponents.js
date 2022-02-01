import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import { Button, ButtonLink} from './ReserveComponents'

const RentalComponents = (props) => {

    const [car,setCar] = useState(null)
    const [agency,setAgency] = useState(null)
    const [rating,setRating] = useState(null)

    const navigate = useNavigate();
    const [loading,isLoading] = useState(true);



    let car_id
    let agency_id 
    let car_rev //(by id)
    
    return (
        <tr>
        <td width="25">{props.model}</td>
        <td width="200">{props.cena}</td>
        <td width="150">{props.miasto}</td>
        <td width="300">{props.begin}</td>
        <td width="300">{props.end}</td>
        <td width="300">{props.ocena}</td>
        <td width="300">{props.twojaocena}</td>
        
        {props.added ? <Button><ButtonLink to='/account'>Dodaj ocenę</ButtonLink></Button> : null}
    </tr>
    )
};

export default RentalComponents;
