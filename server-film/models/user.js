const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userName: {
        type: String, 
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: ""
    },
    isActive: {
        type: Boolean,
        default: true
    },
    history: {
        type: Array,
        default: []
    },
    date: {
        type: Date,
        default: Date.now
    }
})

userSchema.index({ userName: "text" });

module.exports = mongoose.model("users", userSchema);