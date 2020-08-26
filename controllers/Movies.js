const Movies = require('../Models/Movies');

module.exports = {
    getAllData : (req, res) => {
        Movies.find()
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
        const {title, year, genre, description, url_trailer } = req.body
        Movies.create({
            title,
            year,
            genre,
            description,
            url_trailer
        }, (error, result) => {
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
    updateOne: async (req, res) => {
        const {title, year, genre, description, url_trailer } = req.body
        const movies = await Movies.findOneAndUpdate(
            {_id: req.params.id },
            {
                title,
                year,
                genre,
                description,
                url_trailer
            },
            {new: true}
        );
        if(movies) {
            res.send({
                message: 'success',
                movies
            })
        } else {
            res.send({
                message: 'error'
            })
        }
    },
    deleteOne: async (req, res) => {
        const movies = await Movies.deleteOne(
            {_id: req.params.id },
            {new: true}
        );
        if(movies) {
            res.send({
                message: 'success',
                movies
            })
        } else {
            res.send({
                message: 'error'
            })
        }
    }
}