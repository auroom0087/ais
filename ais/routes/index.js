var express = require('express');
var router = express.Router();

const mysql = require("mysql2");
const crypto = require('crypto');
const multer = require("multer");

const upload = multer({ dest: "uploads" });
const pool = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "ais",
    password: ""
});

const Auth = require('./../controllers/Auth')
const auth = new Auth()
    /* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

// API BLOCK //
var id = ""

router.get('/api/auth/:id', async function(req, res) {
    pool.query("select * from users where user_id=?", [req.params.id],
        function(err, data) {
            if (data) {
                pool.query("update users set isLoggedIn = true where user_id=?", [req.params.id],
                    function(err, data) {
                        if (data) {
                            console.log(data)
                        }
                    });
                data.token = crypto.createHmac('sha256', String(new Date())).digest('hex')
                res.send(data[0])
                return data
            } else {
                return "Error!"
            }
        });
})

router.get('/api/guests', async function(req, res) {
    console.log(crypto.createHmac('sha256', String(new Date())).digest('hex'))
    pool.query("select * from users",
        function(err, data) {
            console.log(data)
            if (data) {
                res.send(data)
                return data
            } else {
                return "Error!"
            }
        });
})

router.post('/api/upload', upload.single('file'), async function(req, res) {

    res.json({ file: req.file })

});


module.exports = router;