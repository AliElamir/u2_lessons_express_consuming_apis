const express = require('express')
const indexRouter = require('./routes/index')
const quotesRouter = require('./routes/quotes')
const app = express()
const PORT = 3000
app.set('view engine', 'ejs')

const axios = require('axios')

// Define routes and middleware

app.use('/', indexRouter)
app.use('/quotes', quotesRouter)

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`)
})

module.exports = app
