// This file contains all the api endpoints related to user i.e.:
// 1. User login, logout
// 2. Group creation, addition, deletion

const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    next()
})

router.get('/', (req, res) => {
    res.send('users home page')
})


module.exports = router
