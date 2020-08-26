const express = require('express')
const route = express.Router();
const { verifyToken } = require('../helpers/token')

const {
    getAllData,
    addOne,
    deleteOne
} = require('../controllers/HistoryWatch')

route.get('/history', verifyToken, getAllData)
route.post('/history', verifyToken, addOne)
route.delete('/history/:id', verifyToken, deleteOne)

module.exports = route