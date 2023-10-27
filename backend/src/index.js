const express = require('express')
const tasks = require('./controllers/tasks')
const users = require('./controllers/users')


const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/users', users)
app.use('/tasks', tasks)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
