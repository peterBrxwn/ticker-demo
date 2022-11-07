import fetch from 'node-fetch';
const url = 'https://newsapi.org/v2/everything?q=tesla&from=2022-10-07&sortBy=publishedAt&apiKey=8262ea4435994f43afec08c2de4b7490';

export async function getNewsData() {
  const res = await fetch(url);
   return res.json();
}