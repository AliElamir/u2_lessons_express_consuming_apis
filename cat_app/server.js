const express = require('express')

const app = express()

const PORT = 3000

app.set('view engine', 'ejs')

const axios = require('axios')

// Define routes and middleware

app.get('/', async (req, res) => {
  const catFactsUrl = 'https://catfact.ninja/facts'

  try {
    const response = await axios.get(catFactsUrl)
    const catFacts = response.data.data
    // res.json(catFacts)
    res.render('index',{catFacts})
  } catch (error) {
    console.log("it didnt work")
    console.log(error)
  }
})

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`)
})
