var connection = require('../database/connection');
var User = require('../models/User');
var table_name = 'users';

module.exports = class UserRepository {
    constructor () {
        this.page = 1;
        this.limit = 0;
        this.per_page = 2;
    }

    setPage(page) {
        this.page = page;
        this.limit = (this.page - 1) * this.per_page;
    }

    getusers() {
        return new Promise((resolve, reject) => {
            connection.query("select * from " + table_name, (err, results) => {
                console.log('results: ', results);
                if (err) {
                    console.log(err);
                    reject(null);
                }
                // resolve(results);

                let users = [];
                results.forEach(result => {
                    let user = new User();
                    user = Object.assign(user, result);
                    users.push(user);
                });

                resolve(users);
            });
        });
    }
    saveUser(user) {
        return new Promise((resolve, reject) => {
            connection.query("insert into " + table_name + " set ?",
                user,
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