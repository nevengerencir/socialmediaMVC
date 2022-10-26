const Notification = require('../models/notifications')

module.exports = {
    getProfile: (req,res)=>{
        res.render('profile.ejs')
    },
    postOne: async (req,res) =>{
       try{
         await Notification.create({ info:req.body.notification, likes: 0, seen:false })
         console.log(`New post created!`)
         res.json('created!')
    }
    catch(error){
        console.log(`error`)
    }
    }

}