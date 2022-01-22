import React from 'react';
import img2 from '../../images/car-2.svg';

const FormSuccess = () => {
    return (
        <div className="form-content-right">
            <div className="form-success">We have received your request!</div>
            <img src={img2} alt="success" className="form-img-2"/>
        </div>
    );
};

export default FormSuccess;

