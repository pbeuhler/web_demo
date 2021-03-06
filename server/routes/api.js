const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const saltRounds = 10;

var count = 0;
var prevCount = 0;

router.get('/', (req, res) => {
    res.send('From API route');
})

function User(username, password){
    this.username = username;
    this.password = password;
}

function hashPassword(password) {
    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync(password, salt);
    return hash;
}

function makeDBRequest(userData) {
    var tempSalt = bcrypt.genSaltSync(saltRounds);
    var tempHash = bcrypt.hashSync('admin', tempSalt);
    return (userData.username === 'admin' && bcrypt.compareSync('admin', tempHash))
}

router.post('/login', (req, res) => {
    let userData = req.body
    if(makeDBRequest(userData)){
        let user = new User(userData.username, userData.password);
        let payload = { subject:  user.username};
        let token = jwt.sign(payload, 'secretKey');
        res.status(200).send({token});
    }
    else{
        res.status(401).send('Invalid login')
    }
})


router.get('/counter', verifyToken, (req, res) => {
    count = 0;
    prevCount = 0;
    res.json(count);
})

router.get('/increment', verifyToken, (req, res) => {
    prevCount = count;
    if(count*2 > 1){
        count = 2*count
    }
    else{
        count = 1
    }
    res.json([prevCount, count])
})

router.get('/decrement', verifyToken, (req, res) => {
    count = prevCount
    res.json(count)
})

function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
        return res.status(401).send('Unauthorized request');
    }
    let token = req.headers.authorization.split(' ')[1];
    if(token === 'null'){
        return res.status(401).send('Unauthorized request');
    }
    let payload = jwt.verify(token, 'secretKey');
    if(!payload){
        return res.status(401).send('Unauthorized request');
    }
    req.userId = payload.subject;
    next();
}

module.exports = router

