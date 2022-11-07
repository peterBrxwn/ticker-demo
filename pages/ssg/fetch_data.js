import fetch from 'node-fetch';

export async function getNewsData() {
  const res = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-10-07&sortBy=publishedAt&apiKey=8262ea4435994f43afec08c2de4b7490');
  return res.json();
}