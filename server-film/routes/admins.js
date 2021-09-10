const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController');

router.post('/', adminController.admin_login);
router.post('/signup', adminController.admin_signup);
router.post('/signout', adminController.admin_deleteCookies);
router.get('/getUser', adminController.admin_getAllUser);
router.get('/blockUser', adminController.admin_blockUser);
router.get('/unblockUser', adminController.admin_unblockUser);
router.get('/allMovies', adminController.admin_getAllMovie);

module.exports = router;