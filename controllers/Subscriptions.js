const Subscriptions = require('../Models/Subscriptions');

module.exports = {
    getAllData : (req, res) => {
        Subscriptions.find({})
        .populate({path:'idUser', select: 'userName fullName' })
        .then(result => {
            res.send({
                message: 'get All data',
                result
            })
        })
        .catch(error => {
            console.log(error)
            res.send({
                message: 'failed'
            })
        })
    },
    addOne: (req, res) => {
        const {status, idUser} = req.body
        Subscriptions.create({status, idUser}, 
            (error, result) => {
            if(error){
                res.send({
                    message: "error"
                })
            }
            else {
                res.send({
                    message: result
                })
            }
        })
    },
    deleteOne: async (req, res) => {
        const subscriptions = await Subscriptions.deleteOne(
            {_id: req.params.id },
            {new: true}
        );
        if(subscriptions) {
            res.send({
                message: 'success',
                subscriptions
            })
        } else {
            res.send({
                message: 'error'
            })
        }
    }
}