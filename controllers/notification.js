const Notification = require('../models/notifications')
const Comment = require('../models/Comment')


module.exports = {
    postComment: async (req,res) =>{
       try{
         await Comment.create({ 
            info:req.body.comment,
            userId:req.user.id,
            userName: req.user.userName,
            notificationId: req.params.id
        })
         console.log(`New comment created!`)
         res.redirect('back');
        }
    catch(error){
        console.log(`error`)
    }
    },
    getNotification: async(req,res)=>{
    try{
        let id = req.user._id
        const notification = await Notification.findById(req.params.id)
        const comments = await Comment.find({notificationId:notification._id})
        res.render('notification.ejs',{
            comments : comments,
            notification : notification,
            id: id,
        })
    }
    catch(error){console.log(error)}},
    getIndex: async (req,res)=>{
       try{ 
        
        const notifications = await Notification.find()
        let id = req.user._id
        console.log(id)
        res.render('notificationBoard.ejs',{
            items : notifications,
            id
        })}
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