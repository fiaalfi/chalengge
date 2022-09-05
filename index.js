const express = require("express");
const path = require('path')

const app = express();

const port = 4000;

app.set('view engine', 'ejs')

app.use(express.static('assets'))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/game', (req, res) => {
  res.render('main')
})

// Routes import
const authRoute = require('./routes/auth')

// Router
app.use('/v1/auth', authRoute)

app.listen(port, ()=>{
  console.log(`fia server is running in port http://${port}`)
})