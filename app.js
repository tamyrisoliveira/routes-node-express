const express = require('express')
const app = express()
const people = require('./routes/people.js')
const middle = require('./middle.js')

app.use(express.json())
app.use(middle)
app.use('/people', people)


app.listen(5000, () => {
    console.log('This server is running...')
})