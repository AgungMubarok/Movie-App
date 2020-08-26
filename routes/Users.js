const express = require('express')
const route = express.Router();

const {
    getAllData,
    addOne,
    updateOne,
    deleteOne,
    login
} = require('../controllers/Users')

route.get('/users', getAllData)
route.post('/users', addOne)
route.put('/users/:id', updateOne)
route.delete('/users/:id', deleteOne)
route.post('/users/login', login)

module.exports = route