const express = require('express')
const bodyParser = require('body-parser')
const cc = require('./characterController')

const app = express()

app.use(bodyParser.json())

app.get('/api/characters', cc.getCharacters)


app.listen(3005, () => {
    console.log('Listening on port 3005')
})