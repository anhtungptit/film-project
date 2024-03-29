const Admin = require('../models/admin');
const User = require('../models/user');
const Movie = require('../models/movie');
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

exports.admin_getAllUser = async (req, res) => {
    try {
        const users = await User.find();
        return res.json(users);
    } catch (err) {
        return res.json({error: err});
    }
}

exports.admin_blockUser = async (req, res) => {
    try {
        const { id } = req.query;
        const user =  await User.findOneAndUpdate({_id: id}, {isActive: false}, {
            new: true
          });
        return res.json(user);
    } catch(err) {
        return res.json({error: err});
    }
}

exports.admin_unblockUser = async (req, res) => {
    try {
        const { id } = req.query;
        const user =  await User.findOneAndUpdate({_id: id}, {isActive: true}, {
            new: true
          });
        return res.json(user);
    } catch(err) {
        return res.json({error: err});
    }
}

exports.admin_getAllMovie = async (req, res) => {
    try {
        const movies = await Movie.find();
        return res.json(movies);
    } catch(err) {
        return res.json({error: err});
    }
}

exports.admin_changeDetailsMovie = async (req, res) => {
    try {
        const { idFilm } = req.query;
        const {title, genre, actor, description, posterImg, filmUrl} = req.body;
        const movie = await Movie.findById(idFilm);
        if (posterImg) {
            movie.title = title;
            movie.genre = [...genre.split(', ')];
            movie.actor = [...actor.split(', ')];
            movie.description = description;
            movie.posterImg = posterImg;
            movie.filmUrl = filmUrl;
            movie.save();
        } else {
            movie.title = title;
            movie.genre = [...genre.split(', ')];
            movie.actor = [...actor.split(', ')];
            movie.description = description;
            movie.filmUrl = filmUrl;
            movie.save();
        }
        return res.json(movie);
    } catch(err) {
        return res.json({error: err});
    }
}

exports.admin_addMovie = async (req, res) => {
    try {
        const {actor, genre, title, posterImg, description, filmUrl} = req.body;
        const movie = new Movie({
            actor: [...actor],
            genre: [...genre],
            reviews: [],
            title: title,
            posterImg: posterImg,
            bannerImg: posterImg,
            description: description,
            trailerUrl: filmUrl,
            filmUrl: filmUrl
        });
        await movie.save();
        return res.json(movie);
    } catch(err) {
        return res.json({error: err});
    }
}

exports.admin_removeMovie = async (req, res) => {
    try {
        const { idFilm } = req.query;
        await Movie.findById(idFilm).remove();
        return res.json({message: "Remove film successfuly"});
    } catch(err) {
        return res.json({error: err});
    }
}