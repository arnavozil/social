const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());


const PORT = process.env.PORT || 5000;

app.get('/', async (req, res) => {
    const { u } = req.query;
    
    try {
        const response = await await fetch(u, {
            "credentials": "include",
            "headers": {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0",
                "Accept": "*/*",
                "Accept-Language": "en-US,en;q=0.5"
            },
            "referrer": "https://twitter.com/home",
            "method": "GET",
            "mode": "cors"
        });
        const text = await response.text();
        res.json({
            text
        });
    } catch (err) {
        console.log(err);
        res.send(err);
    };

});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});