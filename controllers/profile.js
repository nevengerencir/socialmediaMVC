const Notification = require('../models/notifications')

module.exports = {

        getProfileById: async (req,res ) => {
                try{      
                    if(req.user._id == req.params.id){
                        res.redirect('/profile')
                    }   
                    else{            
        const notifications = await Notification.find({user_id: req.params.id})
        res.render('profileById.ejs',{items : notifications})}}   
        catch(error){console.log(error)}
    },

    getProfile: async (req,res)=>{
        try{
            const notification = await Notification.find({user_id: req.user._id})
            res.render('profile.ejs',{items: notification})
        }
            catch(error){console.log(error)}
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