const express = require('express')
const Twitter = require('./api/helpers/twitter')
const twitter = new Twitter()
require('dotenv').config()

const app = express()
const PORT = 3000

app.get("/tweets", (req, res) => {
    const query = req.query.q
    const count = req.query.count
    console.log(process.env.TWITTER_API_TOKEN)
    twitter.get(query, count).then((response) => {
        res.status(200).send(response.data)
    }).catch((err) => {
        res.status(400).send(err.response.status)
    })
})

app.listen(PORT, () => {
    console.log(`Twitter API listening on port ${PORT}`)
})