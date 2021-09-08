const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController');

router.post('/', adminController.admin_login);
router.post('/signup', adminController.admin_signup);
router.post('/signout', adminController.admin_deleteCookies);

module.exports = router;