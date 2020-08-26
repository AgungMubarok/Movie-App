const mongoose = require('mongoose')

const Schema = mongoose.Schema

const subscriptionsSchema = new Schema({
    status: {
        type: Boolean,
        required: true
    },
    idUser: [{
        type: Schema.Types.ObjectId,
        ref: "users"
    }]
}, {timestamps:true})

const Subscriptions = mongoose.model('subscriptions', subscriptionsSchema)

module.exports = Subscriptions;