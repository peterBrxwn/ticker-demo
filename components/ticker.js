import React from "react";
import { ReactTicker } from '@guna81/react-ticker'
import { useState, useEffect } from 'react'

const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);

export default function Ticker(props) {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      await delay(1000)
      setLoading(false)
    }
    fetchData();
  }, []);

  if (isLoading) return <span></span>

  const renderItem = (item) => {
    return (
      <p style={{ whiteSpace: "nowrap" }}>
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          {item.title}
        </a>
      </p>
    );
  };
  const data = [];
  for (let article of props.data.newsData.articles) {
    if (article.source.id == 'reuters') data.push(article);
  }

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