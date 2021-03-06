const serverless = require('serverless-http')
const express = require('express')
const bodyParser = require('body-parser')
const User = require('./src/models/user')

const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({message: 'A simple user bio databaase'})
})

app.post('/users', async (req, res) => {
  const user = User.forge({ name: 'Tomi', bio: 'Software Engineer and Poet'})

  await user.save()
  
  res.json({
    message: 'User saved sucessfully',
    body: user
  })
})

module.exports.handler = serverless(app)
