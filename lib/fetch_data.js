import fetch from 'node-fetch';
const url = 'https://newsapi.org/v2/top-headlines?sources=reuters&sortBy=publishedAt&apiKey=8262ea4435994f43afec08c2de4b7490';

export async function getNewsData() {
  const res = await fetch(url);
   return res.json();
}