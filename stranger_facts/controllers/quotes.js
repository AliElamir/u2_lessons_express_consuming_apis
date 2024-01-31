const axios = require('axios')

const index = async (req, res) => {
  const strangeFacts = 'https://strangerthings-quotes.vercel.app/api/quotes/5'
  try {
    const response = await axios.get(strangeFacts)
    console.log(response)
    const strangerFacts = response.data
    res.render('quotedir/index', { strangerFacts })
  } catch (error) {
    console.log('it didnt work')
    console.log(error)
  }
}

module.exports = {
  index
}
