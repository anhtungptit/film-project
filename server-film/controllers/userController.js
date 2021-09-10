const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client("733397129937-suoq2fgffo8br6hsqutkubqtn80u0bqf.apps.googleusercontent.com")

const fetch = require('node-fetch');

exports.user_login = async (req, res) => {
    try{
        const user = await User.findOne({ userEmail: req.body.userEmail});
        if(!user){
            return res.json({message: "Email doesn't exist"})
        }else {
            if(user.isActive === false) {
                return res.json({message: "Tài khoản đã bị khóa"});
            }
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if(err){
                    return res.json({error: err});
                }else if(!result) {
                    return res.json({message: "Password is incorrect"});
                }else {
                    jwt.sign({
                        _id: user._id
                    }, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "24h"}, (err, token) => {
                        if(err){
                            return res.json({error: err})
                        }else {
                            res.cookie("tokenUser", token);
                            return res.json({
                                _id: user._id,
                                message: "You are logged in",
                                username: user.userName,
                                avatar: user.avatar,
                                history: user.history
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

exports.user_loginFaceBook = async (req, res) => {
    const {userID, accessToken} = req.body;

    let urlGraphFacebook = `https://graph.facebook.com/v2.11/${userID}/?fields=name,email,picture&access_token=${accessToken}`
    const response = await fetch(urlGraphFacebook, {
        method: 'GET'
    })
    .then(res => res.json());

    const {name, email, picture} = response;
    const userCheck = await User.findOne({ userEmail: email});
    if(userCheck){
        if(!userCheck.isActive){
            return res.json({ message: "Tài khoản của bạn đã bị khóa"});
        }
        jwt.sign({
            _id: userCheck._id
        }, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "24h"}, (err, token) => {
            if(err){
                return res.json({error: err})
            }else {
                res.cookie("tokenUser", token);
                return res.json({
                    _id: user._id,
                    message: "You are logged in",
                    username: userCheck.userName,
                    avatar: userCheck.avatar,
                    history: userCheck.history
                })
            }
        })
    } else {
        bcrypt.hash(password = "", 10, async (err, hash) => {
            if(err){
                return res.json({error: err});
            }else {
                const user = new User({
                    userName: name,
                    userEmail: email,
                    password: hash,
                    avatar: picture.data.url
                });
                const savedUser = await user.save();
                return res.json({
                    message: "User created succesfully",
                    user: savedUser
                })
            }
        });
    }
}

exports.user_loginGoogle = async (req, res) => {
    const {tokenId} = req.body;

    const response = await client.verifyIdToken({idToken: tokenId, audience: '733397129937-suoq2fgffo8br6hsqutkubqtn80u0bqf.apps.googleusercontent.com'});
    const {email_verified, email, name, picture} = response.payload;
    if(email_verified){
        const userCheck = await User.findOne({ userEmail: email});
        if(userCheck){
            if(!userCheck.isActive){
                return res.json({ message: "Tài khoản của bạn đã bị khóa"});
            }
            jwt.sign({
                _id: userCheck._id
            }, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "24h"}, (err, token) => {
                if(err){
                    return res.json({error: err})
                }else {
                    res.cookie("tokenUser", token);
                    return res.json({
                        _id: user._id,
                        message: "You are logged in",
                        username: userCheck.userName,
                        avatar: userCheck.avatar,
                        history: userCheck.history
                    })
                }
            })
        } else {
            bcrypt.hash(password = "", 10, async (err, hash) => {
                if(err){
                    return res.json({error: err});
                }else {
                    const user = new User({
                        userName: name,
                        userEmail: email,
                        password: hash,
                        avatar: picture
                    });
                    const savedUser = await user.save();
                    return res.json({
                        message: "User created succesfully",
                        user: savedUser
                    })
                }
            });
        }
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
                    jwt.sign({
                        _id: user._id
                    }, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "24h"}, (err, token) => {
                        if(err){
                            return res.json({error: err})
                        }else {
                            res.cookie("tokenUser", token);
                            return res.json({
                                message: "You are logged in",
                                username: savedUser.userName,
                                avatar: savedUser.avatar,
                                history: savedUser.history
                            })
                        }
                    })
                }
            });
        }
    }catch(err){
        return res.json({error: err});
    }
}

exports.deleteCookies = async (req, res) => {
    try {
        res.cookie('tokenUser', 'none', {
            expires: new Date(Date.now() + 5 * 1000),
            httpOnly: true,
        })
        return res.json({message: "logout succesfully"});
    } catch(err) {
        return res.json({error: err});
    }
}

exports.saveHistory = async (req, res) => {
    try {
        const movie = req.body;
        const { idUser } = req.query;
        const user = await User.findById(idUser);
        user.history.unshift(movie);
        await user.save();
        return res.json(user);
    }catch (err) {
        return res.json({error: err});
    }
}