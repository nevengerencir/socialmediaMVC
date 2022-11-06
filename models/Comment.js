const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
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
user: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
},
notificationId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Notification',
}
  ,
  date:{
    type: Date,
    default: Date.now
  }
})
module.exports = mongoose.model('Comment', CommentSchema)