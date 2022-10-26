const mongoose = require('mongoose')
const NotificationSchema = new mongoose.Schema({
    info:{
        type: String,
        required: true,
    },
    likes:{
        type: Number,
        required: true,
    },
    seen:{
        type: Boolean,
        required: true,
    },

})
module.exports = mongoose.model('Notification', NotificationSchema)