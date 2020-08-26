const mongoose = require('mongoose')

const Schema = mongoose.Schema

const historySchema = new Schema({
    idUser: [{
        type: Schema.Types.ObjectId,
        ref: "users"
    }],
    idMovies: [{
        type: Schema.Types.ObjectId,
        ref: "movies"
    }],
    idSubscriptions: [{
        type: Schema.Types.ObjectId,
        ref: "subscriptions"
    }]
}, {timestamps:true})

const History = mongoose.model('history_watch', historySchema)

module.exports = History;