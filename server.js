const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')

const routes = require('./routes')

const app = express()
app.set('port', process.env.PORT || 9000)
const dboption = {
    host: 'localhost',
    port:3306,
    user: 'root',
    password: '',
    database: 'library'
}

//middlewares-------------------------------
app.use(myconn(mysql,dboption, 'single'))

//routes-------------------------------------
app.get('/', (req, res)=>{
    res.send('welcome to my API')
})
app.use('/api', routes)

//server run---------------------------------
app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})