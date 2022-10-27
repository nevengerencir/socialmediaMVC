const Notification = require('../models/notifications')

module.exports = {
    getIndex: async (req,res)=>{
       try{ const notifications = await Notification.find()
        res.render('notification.ejs',{items : notifications})}
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