var crypto = require('crypto');

module.exports = class User {
    constructor(id = null, fname = null , lname = null , email = null ,password = null , cpassword = null){
        this.id = id;
       this.fname = fname;
       this.lname = lname;
       this.email = email;
       this.password = password;
       this.cpassword = cpassword;
    }

   

   
};