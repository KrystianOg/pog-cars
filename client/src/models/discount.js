class Discount{
    constructor(code, expiration_date, user_id, value, car_id){
        this.code = code;
        this.expiration_date = expiration_date;
        this.user_id = user_id;
        this.value = value;
        this.car_id = car_id;
    }
}

module.exports = Discount;