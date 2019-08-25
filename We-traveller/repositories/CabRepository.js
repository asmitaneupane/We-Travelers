var connection = require('../database/connection');
var Cab = require('../models/Cab');
var table_name = 'cab_register';

module.exports = class CabRepository {
    constructor () {
    }
    getcabs() {
        return new Promise((resolve, reject) => {
            connection.query("select * from " + table_name, (err, results) => {
                console.log('results: ', results);
                if (err) {
                    console.log(err);
                    reject(null);
                }
                // resolve(results);

                let cabs = [];
                results.forEach(result => {
                    let cab = new Cab();
                    cab = Object.assign(cab, result);
                    cabs.push(cab);
                });

                resolve(cabs);
            });
        });
    }
    saveCab(cab) {
        return new Promise((resolve, reject) => {
            connection.query("insert into " + table_name + " set ?",
                cab,
                (err, results) => {
                    if (err) {
                        console.log(err);
                        reject(null);
                    }
                    resolve(results);
                });
        });
    }
}