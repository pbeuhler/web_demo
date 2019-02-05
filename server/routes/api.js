const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('From API route')
})

router.post('/login', (req, res) => {
    
})

module.exports = router

