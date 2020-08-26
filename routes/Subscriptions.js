const express = require('express')
const route = express.Router();
const { verifyToken } = require('../helpers/token')


const {
    getAllData,
    addOne,
    deleteOne
} = require('../controllers/Subscriptions')

route.get('/subs', verifyToken, getAllData)
route.post('/subs', verifyToken, addOne)
route.delete('/subs/:id', verifyToken, deleteOne)

module.exports = route