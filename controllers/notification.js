const Notification = require('../models/notifications')
const Comment = require('../models/Comment')


module.exports = {
    getNotification: async(req,res)=>{
    try{
        const notification = await Notification.findById(req.params.id)
        const comments = await Comment.find({user: notification.user_id})
        res.render('notification.ejs',{
            comments : comments,
            notification : notification
        })
    }
    catch(error){console.log(error)}},
    getIndex: async (req,res)=>{
       try{ const notifications = await Notification.find()
        res.render('notificationBoard.ejs',{items : notifications})}
        catch(error){console.log(error)}
    },
    likeOne: async (req,res)=>{
        try{  await Notification.updateOne({_id:req.body.id}, 
            {$inc: { likes: +1}})
        res.json('Updated by one!')}
            catch(error){console.log(error)}
    },
    dislikeOne: async (req,res)=>{
        try{  await Notification.updateOne({_id:req.body.id}, 
            {$inc: { likes: -1}})
        res.json('Disliked by one!')}
            catch(error){console.log(error)}
    },
    markSeen:(req,res)=>{
        res.render('notification.ejs')
    },
    deleteOne: async (req,res)=>{
        try{ await Notification.deleteOne({_id:req.body.id})
        res.json('Deleted')}
            catch(error){console.log(error)}
    }
}