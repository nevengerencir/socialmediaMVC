const express = require('express');
const app = express();
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const notificationRoutes = require('./routes/notification')
const profileRoutes = require('./routes/profile')

require('dotenv').config({path: './config/.env'})


connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes)
app.use('/notification', notificationRoutes)
app.use('/profile', profileRoutes)



app.listen(process.env.PORT,() => {
    console.log(`Server listening on port 3000`)
})