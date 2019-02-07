const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

router.get('/', (req, res) => {
    res.send('From API route')
})

function User(username, password){
    this.username = username;
    this.password = password;
}

router.post('/login', (req, res) => {
    let userData = req.body
    if(userData.username == "admin" && userData.password == "admin"){
        let user = new User(userData.username, userData.password)
        let payload = { subject:  user.username}
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({token})
    }
    else{
        res.status(401).send('Invalid login')
    }
})

router.get('/counter', (req, res) => {

})

module.exports = router

