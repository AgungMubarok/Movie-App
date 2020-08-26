const express = require('express')
const route = express.Router();

const {
    getAllData,
    addOne,
    deleteOne
} = require('../controllers/HistoryWatch')

route.get('/history', getAllData)
route.post('/history', addOne)
route.delete('/history/:id', deleteOne)

module.exports = route