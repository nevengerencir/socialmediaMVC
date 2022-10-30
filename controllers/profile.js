const Notification = require('../models/notifications')

module.exports = {
    getProfile: (req,res)=>{
        res.render('profile.ejs')
    },
    postOne: async (req,res) =>{
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const DateInfo = [year, month, day].join('/');
       try{
         await Notification.create({ 
            info:req.body.notification,
             likes:0,
             user_id:req.user.id,
             userName: req.user.userName,
             date: DateInfo
        })
         console.log(`New post created!`)
         res.redirect('/notification')
    }
    catch(error){
        console.log(`error`)
    }
    }

}