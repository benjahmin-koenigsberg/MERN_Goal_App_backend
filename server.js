const express = require('express')
require('dotenv').config()
const { errorHandling } = require('./middleware/errorMiddleware.js')
const connectDB = require('./config/db.js')
const colors = require('colors')
const path = require('path')
const cors = require('cors')

const port = process.env.PORT || 5000
connectDB()

const app = express()

//app.use(cors({ origin: "*", credentials: true }))

//app.use(express.json())
// app.use(express.urlencoded({extended:false}))

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())



app.use('/api/goals', require('./routes/goalRoutes.js'))

app.use('/api/users', require('./routes/userRoutes.js'))



//server front end
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')) )
} else {
    app.get('/', (req, res) => res.send('Please set to production'))
}

app.use(errorHandling)

app.listen( port, ()=>{
    console.log(`server startded on ${port} 🚀...`)
})
