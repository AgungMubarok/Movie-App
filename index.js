const express = require('express');
const db = require('./config/db');
const bodyParser = require('body-parser')
const cors = require('cors')
const usersRouter = require('./routes/Users')
const moviesRouter = require('./routes/Movies')
const subscriptionsRouter = require('./routes/Subscriptions')
const historyRouter = require('./routes/HistoryWatch')
require('dotenv').config()

let PORT = process.env.PORT || 8000

const app = express()
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('welcome')
})

app.use('/api', usersRouter)
app.use('/api', moviesRouter)
app.use('/api', subscriptionsRouter)
app.use('/api', historyRouter)

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('we re connected'));

app.listen(PORT, ()=> {
    console.log(`connected AT PORT ${PORT}`)
})