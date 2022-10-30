const mongoose = require('mongoose')

const NotificationSchema = new mongoose.Schema({
  info: {
    type: String,
    required: true,
  },
  likes:{
    type:Number,
    required: true,
  },
  userName:{
    type: String,
    required:true,
  },
  user_id:{
    type:String,
    required:true
  },
  date:{
    type:String,
    required:true
  }
})
module.exports = mongoose.model('Notification', NotificationSchema)

