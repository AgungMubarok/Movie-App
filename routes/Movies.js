const express = require('express')
const route = express.Router();

const {
    getAllData,
    addOne,
    updateOne,
    deleteOne
} = require('../controllers/Movies')

route.get('/movies', getAllData)
route.post('/movies', addOne)
route.put('/movies/:id', updateOne)
route.delete('/movies/:id', deleteOne)

module.exports = route