const express = require('express')
var axios = require('axios')

const app = express()
const PORT = 3000

app.get("/tweets", (req, res) => {
    const query = req.query.q
    const count = req.query.count
    const url = 'https://api.twitter.com/1.1/search/tweets.json'
    axios.get(url, {
        params: {
            q: query,
            count: count
        },
        headers: {
            'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAOJnNAEAAAAA%2F3yJRs4p91XE%2Beaqd%2BE430g0oTo%3DLWsEXWnUJ92da9b7psBcm2tlQmYbvojt0bzXA4gOKDwlXAN4xP'
        }
    }).then((response) => {
        res.status(200).send(response.data)
    }).catch((err) => {
        console.log(err)
        res.status(400).send(err.response.status)
    })
})

app.listen(PORT, () => {
    console.log(`Twitter API listening on port ${PORT}`)
})