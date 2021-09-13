const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const authUser = require('../middlewares/authUser');

router.post('/signup', userController.user_signup);
router.post('/login', userController.user_login);
router.post('/loginGoogle', userController.user_loginGoogle);
router.post('/loginFacebook', userController.user_loginFaceBook);
router.post('/signout', userController.deleteCookies);
router.get('/getUserHistory', userController.getUserHistory);
router.post('/saveHistory', userController.saveHistory);

module.exports = router