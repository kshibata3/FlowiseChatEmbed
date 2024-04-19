const express = require('express');
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());

app.get('/metadata', async (req, res) => {
    const { url } = req.query;
    if (!url) {
        return res.status(400).json({ error: 'URL parameter is required.' });
    }

    try {
        const metadata = await fetchUrlMetadata(url);
        res.json(metadata);
    } catch (error) {
        console.error('Failed to fetch metadata:', error);
        res.status(500).json({ error: 'Failed to fetch metadata' });
    }
});

async function fetchUrlMetadata(url) {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    const metadata = {
        title: $('meta[property="og:title"]').attr('content') || $('title').text(),
        description: $('meta[property="og:description"]').attr('content'),
        image: $('meta[property="og:image"]').attr('content'),
        url
    };

    return metadata;
}

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
