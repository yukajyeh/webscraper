const PORT = 8000;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');


const app = express();

const url = 'https://www.theatlantic.com/world/';

axios(url)
    .then(res => {
        const html = res.data
        const $ = cheerio.load(html)
        const articles = []

        $('.c-story-strip__hed', html).each(function(){
            const title = $(this).text()
            const url = $(this).find('a').attr('href')
            articles.push({
                title,
                url
            })
        })
        console.log(articles)
    }).catch(err => console.log(err))

app.listen(PORT, () => console.log(`server running on Port ${PORT}`));

