//Requiering my packages
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')

const MongoStore = require('connect-mongo')
const flash = require('express-flash')
const logger = require('morgan')

//Connecting to the database
const connectDB = require('./config/database')

//Setting up my routes
const homeRoutes = require('./routes/home')
const notificationRoutes = require('./routes/notification')
const profileRoutes = require('./routes/profile')

//Require the hidden files

require('dotenv').config({path: './config/.env'})


// Passport config
require('./config/passport')(passport)
connectDB()

//Setting up the view engine (render)
app.set('view engine', 'ejs')

//Making a static folder 
app.use(express.static(__dirname + '/public'));

//Middelware for passing data
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))

// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({ mongoUrl: process.env.DB_STRING }),
    })
  )
  
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())


app.use(flash())

app.use('/', homeRoutes)
app.use('/notification', notificationRoutes)
app.use('/profile', profileRoutes)





app.listen(process.env.PORT,() => {
    console.log(`Server listening on port 3000`)
})