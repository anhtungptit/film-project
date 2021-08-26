const jwt = require('jsonwebtoken');

const authUser =  (req, res, next) => {
    // const tokenUser = req.signedCookies.tokenUser;
    // if(!tokenUser){
    //     return res.json("Token không tồn tại");
    // } else {
    //     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {

    //     })
    // }
    // next();
}

module.exports = authUser;