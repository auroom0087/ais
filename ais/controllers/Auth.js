'use strict'

const mysql = require("mysql2");
const crypto = require('crypto');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "ais",
    password: ""
});

class Auth {

    constructor() {}

    async index() {}


    async login(id) {

        connection.query("select * from users where user_id=?", [id],
            function(err, rows) {
                var data = rows[0]
                if (data) {
                    data.token = crypto.createHmac('sha256', String(new Date())).digest('hex')
                    console.log(JSON.stringify(data))
                    return data
                } else {
                    return "Error!"
                }
            });
        connection.end();
    }

    async getToken(user) {
        const secret = String(new Date());
        const hash = crypto.createHmac('sha256', secret)
            .digest('hex');
        return hash
    }
}

module.exports = Auth