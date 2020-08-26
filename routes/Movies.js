const express = require('express')
const route = express.Router();
const { verifyToken } = require('../helpers/token')

const {
    getAllData,
    addOne,
    updateOne,
    deleteOne
} = require('../controllers/Movies')

route.get('/movies', verifyToken, getAllData)
route.post('/movies', verifyToken, addOne)
route.put('/movies/:id', verifyToken, updateOne)
route.delete('/movies/:id', verifyToken, deleteOne)

module.exports = route