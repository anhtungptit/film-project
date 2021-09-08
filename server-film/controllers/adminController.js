const Admin = require('../models/admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.admin_login = async (req, res) => {
    try{
        const admin = await Admin.findOne({ loginID: req.body.loginID});
        if(!admin){
            return res.json({message: "LoginID doesn't exist"})
        }else {
            bcrypt.compare(req.body.password, admin.password, (err, result) => {
                if(err){
                    return res.json({error: err});
                }else if(!result) {
                    return res.json({message: "Password is incorrect"});
                }else {
                    jwt.sign({
                        _id: admin._id
                    }, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "24h"}, (err, token) => {
                        if(err){
                            return res.json({error: err})
                        }else {
                            res.cookie("tokenAdmin", token);
                            return res.json({
                                message: "You are logged in",
                                loginID: admin.loginID,
                                avatar: admin.avatar
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

exports.admin_signup = async(req, res) => {
    try{
        const admin = await Admin.find({ loginID: req.body.loginID});
        if(admin.length >= 1){
            return res.json({message: "LoginID already exists"})
        }else {
            const {loginID, password} = req.body;
            if(!loginID || !password){
                return res.json({message: "Please fill out the form"});
            }
            bcrypt.hash(password, 10, async (err, hash) => {
                if(err){
                    return res.json({error: err});
                }else {
                    const admin = new Admin({
                        loginID: req.body.loginID,
                        password: hash
                    });
                    const savedAdmin = await admin.save();
                    jwt.sign({
                        _id: admin._id
                    }, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "24h"}, (err, token) => {
                        if(err){
                            return res.json({error: err})
                        }else {
                            res.cookie("tokenAdmin", token);
                            return res.json({
                                message: "You are logged in",
                                loginID: savedAdmin.loginID,
                                avatar: savedAdmin.avatar
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

exports.admin_deleteCookies = async (req, res) => {
    try {
        res.cookie('tokenUser', 'none', {
            expires: new Date(Date.now() + 5 * 1000),
            httpOnly: true,
        })
        return res.json({message: "logout succesfully"});
    } catch(err){
        return res.json({error: err});
    }
}