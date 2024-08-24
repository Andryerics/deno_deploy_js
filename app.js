const https = require('https');

// Liste des URLs à pinger
const APP_URLS = [
    "https://api.andryerics.com/fbthona_one/",
    "https://api.andryerics.com/all-media-downloader/",
];

// Fonction pour effectuer une requête GET sur chaque URL
function pingUrls() {
    for (const url of APP_URLS) {
        https.get(url, (res) => {
            console.log(`Pinging ${url} - Status: ${res.statusCode}`);
        }).on('error', (e) => {
            console.error(`Error pinging ${url}: ${e.message}`);
        });
    }
}

// Planification du ping toutes les minutes
setInterval(pingUrls, 60 * 1000); // 60 * 1000 ms = 1 minute
