import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import { Button, ButtonLink} from './ReserveComponents'

const RentalComponents = (params) => {

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
        <td width="25">{params.model}</td>
        <td width="200">{params.cena}</td>
        <td width="150">{params.miasto}</td>
        <td width="300">{params.begin}</td>
        <td width="300">{params.end}</td>
        <td width="300">{params.ocena}</td>
        <td width="300">{params.twojaocena}</td>
        
        {params.added ? <Button><ButtonLink to='/account'>Dodaj ocenę</ButtonLink></Button> : null}
    </tr>
    )
};

export default RentalComponents;
