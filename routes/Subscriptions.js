const express = require('express')
const route = express.Router();

const {
    getAllData,
    addOne,
    deleteOne
} = require('../controllers/Subscriptions')

route.get('/subs', getAllData)
route.post('/subs', addOne)
route.delete('/subs/:id', deleteOne)

module.exports = route