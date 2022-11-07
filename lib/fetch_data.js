const https = require('https');

export async function getNewsData() {
  return await httprequest();
}

function httprequest() {
  return new Promise((resolve, reject) => {
    const req = https.get('https://newsapi.org/v2/everything?q=tesla&from=2022-10-07&sortBy=publishedAt&apiKey=8262ea4435994f43afec08c2de4b7490', (res) => {
      var body = [];
      res.on('data', function (chunk) {
        body.push(chunk);
      });
      res.on('end', function () {
        try {
          body = JSON.parse(Buffer.concat(body).toString());
        } catch (e) {
          reject(e);
        }
        resolve(body);
      });
    });
    req.on('error', (e) => {
      reject(e.message);
    });
    req.end();
  });
}