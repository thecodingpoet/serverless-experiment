const express = require('express')
const handler = require('./handler')

const app = express()
const port = 3000

app.get('/greet', async (req, res) => {
  const event = {}
  res.json(await handler.hello(event));
});

app.listen(port, (req, res) => {
  console.log(`Server started on port ${port}`)
})
