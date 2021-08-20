const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.user_login = async (req, res) => {
    try{
        const user = await User.findOne({ userEmail: req.body.userEmail});
        if(!user){
            return res.json({message: "Email doesn't exist"})
        }else {
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if(err){
                    return res.json({error: err});
                }else if(!result) {
                    return res.json({message: "Password is incorrect"});
                }else {
                    jwt.sign({
                        username: user.userName
                    }, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "24h"}, (err, token) => {
                        if(err){
                            return res.json({error: err})
                        }else {
                            return res.json({
                                message: "You are logged in",
                                username: user.userName,
                                avatar: user.avatar,
                                history: user.history,
                                token: token
                            })
                        }
                    })
                }
            })
        }
    }catch(err){
        return res.json({error: err});
    }
}

exports.user_signup = async(req, res) => {
    try{
        const users = await User.find({ userEmail: req.body.userEmail});
        if(users.length >= 1){
            return res.json({message: "Email already exists"})
        }else {
            const {userName, userEmail, password} = req.body;
            if(!userName || !userEmail || !password){
                return res.json({message: "Please fill out the form"});
            }
            bcrypt.hash(password, 10, async (err, hash) => {
                if(err){
                    return res.json({error: err});
                }else {
                    const user = new User({
                        userName: req.body.userName,
                        userEmail: req.body.userEmail,
                        password: hash
                    });
                    const savedUser = await user.save();
                    return res.json({
                        message: "User created succesfully",
                        user: savedUser
                    })
                }
            });
        }
    }catch(err){
        return res.json({error: err});
    }
}
