/* eslint-disable */
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
var mongoose = require('mongoose')
var User = require('../models/user')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/noosphere')
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function (callback) {
  console.log('Connection Succeeded')
})

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
  res.send({
    message: 'registered'
  })
})

app.listen(process.env.PORT || 8081)

app.post('/register', (req, res) => {
  var db = req.db
  var newUser = new User({
    email: req.body.email,
    password: req.body.password
  })

  newUser.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'User saved successfully!'
    })
  })
})

app.get('/users', (req, res) => {
  User.find({}, 'email', function (error, users) {
    if (error) { console.error(error) }
    res.send({
      users: users
    })
  }).sort({_id: -1})
})
