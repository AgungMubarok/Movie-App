const History = require('../Models/HistoryWatch');

module.exports = {
    getAllData : (req, res) => {
        History.find({})
        .populate({path:'idUser', select: 'userName fullName' })
        .populate({ path: 'idMovies', select: 'title url_trailer'})
        .populate({ path:'idSubscriptions', select: '_id'})
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
        const {idUser, idMovies, idSubscriptions} = req.body
        History.create({idUser, idMovies, idSubscriptions}, 
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
        const history = await History.deleteOne(
            {_id: req.params.id },
            {new: true}
        );
        if(history) {
            res.send({
                message: 'success',
                history
            })
        } else {
            res.send({
                message: 'error'
            })
        }
    }
}