const User = require('../Models/Users');
const { createToken } = require('../helpers/token');

module.exports = {
    getAllData : (req, res) => {
        User.find()
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
        const {fullName, userName, email, password, address } = req.body
        User.create({
            fullName,
            userName,
            email,
            password,
            address
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
        const {fullName, userName, email, password, address } = req.body
        const user = await User.findOneAndUpdate(
            {_id: req.params.id },
            {
                fullName,
                userName,
                email,
                password,
                address
            },
            {new: true}
        );
        if(user) {
            res.send({
                message: 'success',
                user
            })
        } else {
            res.send({
                message: 'error'
            })
        }
    },
    deleteOne: async (req, res) => {
        const user = await User.deleteOne(
            {_id: req.params.id },
            {new: true}
        );
        if(user) {
            res.send({
                message: 'success',
                user
            })
        } else {
            res.send({
                message: 'error'
            })
        }
    },
    login: async(req, res) => {
        try{
            const registerUser = await User.findOne({email: req.body.email})
            if(registerUser.password === req.body.password) {
                const dataUser = {
                    id: registerUser._id,
                    userName: registerUser.userName,
                    email: registerUser.email
                }
                const token = createToken(dataUser)
                res.status(200).json({
                    message : "selamat datang",
                    token,
                    user: dataUser
                })
            } else {
                res.status(400).json({
                    message: "password salah"
                })
            }
        } 
        catch(error) {
            console.log(error);
            res.status(500).json({
                message: "server error"
            })
        }
    }
}