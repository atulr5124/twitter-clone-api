const URL = 'https://api.twitter.com/1.1/search/tweets.json'
const axios = require('axios')

class Twitter {
    get(query, count) {
        return axios.get(URL, {
            params: {
                q: query,
                count: count,
                tweet_mode: "extended"
            },
            headers: {
                'Authorization': `Bearer ${process.env.TWITTER_API_TOKEN}`
            }
        })
    }
}

module.exports = Twitter
