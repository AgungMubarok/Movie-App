const jwt = require('jsonwebtoken');

module.exports = {
    createToken: (dataUser) => {
        const token = jwt.sign({...dataUser}, 'yucup', {
            expiresIn: '3h'
        }) 
    },

    verifyToken: (req,res,next) => {
        const bearerToken = req.headers.authorization
        if(!bearerToken){
            res.status(401).json({
                message: "unautorized"
            })
        }
        try {
            const token = bearerToken.split(" ")[1]
            const decoded = jwt.verify(token, 'yucup');
            if(decoded){
                next()
            }
        }
        catch(error) {
            console.log(error);
            res.status(400).json({
                message: "internal server error"
            })
        }
    }
}