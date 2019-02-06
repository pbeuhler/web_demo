const express = require('express')
const router = express.Router()
// const User = require('../models/user')

router.get('/', (req, res) => {
    res.send('From API route')
})

function User(username, password){
    this.username = username;
    this.password = password;
}


router.post('/login', (req, res) => {
    let userData = req.body
    console.log("working")
    if(userData.username == "admin" && userData.password == "admin"){
        let user = new User(userData.username, userData.password)
        user = new User()
        user.password = "admin"
        user.username = "admin'"
        res.status(200).send(user)

    }
    else{
        res.status(401).send('Invalid login')
    }
})

router.get('/counter', (req, res) => {

})

module.exports = router

