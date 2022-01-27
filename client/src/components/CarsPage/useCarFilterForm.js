import {useState, useEffect} from 'react';

const useCarFilterForm = (callback,validate) => {
    const [values,setValues] = useState({
        make: '',
        price_min: '',
        price_max: '',
        horsepower_min: '',
        horsepower_max: '',
        year_min: '',
        year_max: ''
    })

    const [errors,setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target

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
        }
    }, [errors])

    return {handleChange, values, handleSubmit, errors}
}

export default useCarFilterForm