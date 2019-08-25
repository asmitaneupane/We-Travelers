var UserRepository = require('../repositories/UserRepository');
var userRepository = new UserRepository();
var User = require('../models/User');
var userController = {
    index: async (req, res) => {
        var userlist = await userRepository.getusers();
        res.json(userlist);
    },
    save: async (req, res) => {
        var data = req.body;
        var user = new User();
        console.log('Before', user);
        user.fname = data.fname;
        user.lname = data.lname;
        user.email   = data. email;
        user.password = data.password;
        user.cpassword = data.cpassword;
    

        console.log('After', user);


        var userr = await userRepository.saveUser(user);
        console.log(userr)
        res.status(201);
        res.send();
    },
}
module.exports = userController;