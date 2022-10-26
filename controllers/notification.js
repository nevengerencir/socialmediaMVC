const Notification = require('../models/notifications')

module.exports = {
    getIndex: async (req,res)=>{
       try{ const notifications = await Notification.find()
        res.render('notification.ejs',{items : notifications})}
        catch(error){console.log(error)}
    },
    like:(req,res)=>{
        res.render('notification.ejs')
    },
    markSeen:(req,res)=>{
        res.render('notification.ejs')
    },
}