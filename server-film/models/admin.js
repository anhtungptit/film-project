const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    loginID: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: 'https://res.cloudinary.com/nghiemduong2000/image/upload/v1620266729/VMOflix%20Project/VMOflix%20-%20base/flat_1000x1000_075_f.u2_lnllya.webp'
    }
})

module.exports = mongoose.model('admins', adminSchema);