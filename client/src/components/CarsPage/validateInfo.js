export default function validateInfo(values){
    let errors = {};


    // values.year_max = values.year_max === '' ? null : parseFloat(values.year_max)
    // values.year_min = values.year_min === '' ? null : parseFloat(values.year_min)
    // values.price_max = values.price_max === '' ? null : parseFloat(values.price_max)
    // values.price_min = values.price_min === '' ? null : parseFloat(values.price_min)
    // values.horsepower_max = values.horsepower_max === '' ? null : parseFloat(values.horsepower_max)
    // values.horsepower_min = values.horsepower_min === '' ? null : parseFloat(values.horsepower_min)

    //something to check
    if(values.make !== undefined && values.make.length === 0)
        delete values.make

    if(values.model !== undefined && values.model.length === 0)
        delete values.model

    if(values.price_max !== undefined && values.price_max === Number.MAX_SAFE_INTEGER)
        delete values.price_max

    if( values.horsepower_max !== undefined && values.horsepower_max === Number.MAX_SAFE_INTEGER )
        delete values.horsepower_max

    if(values.year_max !== undefined && values.year_max === Number.MAX_SAFE_INTEGER)
        delete values.year_max


    if(isNaN(values.price_min)&& values.price_min !== undefined){
        errors.price = "Price must be a number"
    }

    if(isNaN(values.price_max)&& values.price_max !== undefined){
        errors.price = "Price must be a number"
    }

    if(isNaN(values.horsepower_min)&& values.horsepower_min !== undefined){
        errors.hp = "Horse power must be a number"
    }

    if(isNaN(values.horsepower_max)&& values.horsepower_max !== undefined){
        errors.hp = "Horse power must be a number"
    }

    if(isNaN(values.year_min)&& values.year_min !== undefined){
        errors.year = "Year must be a number"
    }

    if(isNaN(values.year_max) && values.year_max !== undefined){
        errors.year = "Year must be a number"
    }

    return errors;
}