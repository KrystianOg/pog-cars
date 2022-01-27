export default function validateInfo(values){
    let errors = {};


    values.year_max = values.year_max === '' ? null : parseFloat(values.year_max)
    values.year_min = values.year_min === '' ? null : parseFloat(values.year_min)
    values.price_max = values.price_max === '' ? null : parseFloat(values.price_max)
    values.price_min = values.price_min === '' ? null : parseFloat(values.price_min)
    values.horsepower_max = values.horsepower_max === '' ? null : parseFloat(values.horsepower_max)
    values.horsepower_min = values.horsepower_min === '' ? null : parseFloat(values.horsepower_min)

    //something to check
    if(values.price_min !== ''){
        values.price_min = parseFloat(values.price_min)
    } else if(isNaN(values.price_min)){
        errors.price = "Price must be a number"
    }

    if(values.price_max !== ''){
        values.price_max = parseFloat(values.price_max)
    } else if(isNaN(values.price_max)){
        errors.price = "Price must be a number"
    }

    if(values.horsepower_min !== ''){
        values.horsepower_min = parseFloat(values.horsepower_min)
    } else if(isNaN(values.horsepower_min)){
        errors.hp = "Horse power must be a number"
    }

    if(values.horsepower_max !== ''){
        values.horsepower_max = parseFloat(values.horsepower_max)
    } else if(isNaN(values.horsepower_max)){
        errors.hp = "Horse power must be a number"
    }

    if(values.year_min !==''){
        values.year_min = parseFloat(values.year_min)
    } else if(isNaN(values.year_min)){
        errors.year = "Year must be a number"
    }

    if(values.year_max !==''){
        values.year_max=parseFloat(values.year_max)
    } else if(isNaN(values.year_max)){
        errors.year = "Year must be a number"
    }

    Object.keys(values).forEach(key =>{
        if(values[key] !== values['make']){
            

            if(isNaN(values[key]) || values[key] === '') {
                delete values[key];
            }
        }
    })

    return errors;
}