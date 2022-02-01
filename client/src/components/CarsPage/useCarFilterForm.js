import {useState, useEffect} from 'react';

const useCarFilterForm = (callback,validate) => {
    const [values,setValues] = useState({
        make: '',
        model: '',
        price_min: 0,
        price_max: Number.MAX_SAFE_INTEGER,
        horsepower_min: 0,
        horsepower_max: Number.MAX_SAFE_INTEGER,
        year_min: 0,
        year_max: Number.MAX_SAFE_INTEGER
    })

    const [errors,setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (name,value) => {
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        setErrors(validate(values))
        setIsSubmitting(true)
    }

    useEffect(()=>{
        if(Object.keys(errors).length === 0 && isSubmitting){
            callback(values)
            setIsSubmitting(false)
        }
    }, [errors])

    return {handleChange, values, handleSubmit, errors}
}

export default useCarFilterForm