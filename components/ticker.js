import React from "react";
import { ReactTicker } from '@guna81/react-ticker'
import { useState, useEffect } from 'react'
import fetch from 'node-fetch';
const url = 'https://newsapi.org/v2/top-headlines?sources=reuters&sortBy=publishedAt&apiKey=8262ea4435994f43afec08c2de4b7490';

export default function Ticker() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.articles)
        setLoading(false)
      })
  }, []);

  if (isLoading) return <span></span>
  if (!data) return <span></span>

  const renderItem = (item) => {
    return (
      <p style={{ whiteSpace: "nowrap" }}>
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          {item.title}
        </a>
      </p>
    );
  };

  return (
    <ReactTicker
      data={data}
      component={renderItem}
      speed={45}
      tickerStyle={{
        position: "fixed",
        top: 0,
        left: "0",
        width: "100%",
        zIndex: 99,
      }}
      tickerClassName="news-ticker"
    />
  );
}