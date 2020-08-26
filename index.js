const express = require('express');
const db = require('./config/db');
const bodyParser = require('body-parser')

const usersRouter = require('./routes/Users')
const moviesRouter = require('./routes/Movies')
const subscriptionsRouter = require('./routes/Subscriptions')
const historyRouter = require('./routes/HistoryWatch')

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('welcome')
})

app.use('/', usersRouter)
app.use('/', moviesRouter)
app.use('/', subscriptionsRouter)
app.use('/', historyRouter)

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('we re connected'));

app.listen(2000, ()=> {
    console.log('connected')
})