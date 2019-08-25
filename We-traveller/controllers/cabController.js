var CabRepository = require('../repositories/CabRepository');
var cabRepository = new CabRepository();
var Cab = require('../models/Cab');
var cabController = {
    index: async (req, res) => {
        var cablist = await cabRepository.getcabs();
        res.json(cablist);
    },
    save: async (req, res) => {
        var data = req.body;
        var cab = new Cab();
        console.log('Before', cab);
        cab.cab_number = data.cab_number;
        cab.driver_name = data.driver_name;
        cab.driver_phone   = data.driver_phone;
        cab.licence_number = data.licence_number;
        cab.owner_name = data.owner_name;
    

        console.log('After', cab);


        var cabs= await cabRepository.saveCab(cab);
        console.log(cabs)
        res.status(201);
        res.send();
    },
}
module.exports = cabController;