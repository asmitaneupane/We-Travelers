var crypto = require('crypto');

module.exports = class Cab {
    constructor(id = null, cab_number = null , driver_name = null ,driver_phone = null , licence_number = null ,owner_name = null){
        this.id = id;
       this.cab_number = cab_number;
       this.driver_name = driver_name;
       this.driver_phone = driver_phone;
       this.licence_number = licence_number;
       this.owner_name = owner_name;
    }

   

   
};