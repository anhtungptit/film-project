const jwt = require('jsonwebtoken');

const authUser =  (req, res, next) => {
    const tokenUser = req.signedCookies.tokenUser;
    if(!tokenUser){
        return res.json({message: "Token không tồn tại"});
    } else {
        jwt.verify(tokenUser, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if(err){
                return res.json({message: "Unauthorized"})
            }else {
                req.userId = decoded._id;
                next();
            }
        })
    }
}

module.exports = authUser;