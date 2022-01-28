class Reserve{
    constructor(car_id, user_id, agency_id, rental_begin, rental_end, price){
        this.car_id = car_id;
        this.user_id = user_id;
        this.agency_id = agency_id;
        this.rental_begin = rental_begin;
        this.rental_end = rental_end;
        this.price = price;
    }
}

module.exports = Reserve;