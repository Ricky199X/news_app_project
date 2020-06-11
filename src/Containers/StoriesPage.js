import React, { useState, useEffect } from "react";
// console.log(require("dotenv").config());
require("dotenv").config();
const apiKey = process.env.REACT_APP_NEWS_API_KEY;
console.log(process.env);

const StoriesPage = () => {
  // test fetch
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
  const [stories, setStories] = useState([]);

  const fetchTopHeadlines = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setStories(data);
    console.log(data);
  };

  useEffect(() => {
    fetchTopHeadlines();
  }, []);

  return (
    <div>
      <h1>stories</h1>
      <pre>{JSON.stringify(stories)}</pre>
    </div>
  );
};

export default StoriesPage;
