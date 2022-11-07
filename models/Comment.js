const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
  info: {
    type: String,
    required: true,
  },
  userName:{
    type: String,
    required:true,
  },
userId: {
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