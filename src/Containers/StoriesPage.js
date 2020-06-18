import React, { useState, useEffect } from "react";
import StoryCard from "../Components/StoryCard";
require("dotenv").config();
const apiKey = process.env.REACT_APP_NEWS_API_KEY;

const StoriesPage = () => {
  // test fetch
  const [stories, setStories] = useState([]);
  const [apiEndPoint, setApiEndPoint] = useState("top-headlines?");
  const [country, setCountry] = useState("country=us");
  const [category, setCategory] = useState(null);

  let testingURL = `https://newsapi.org/v2/${apiEndPoint}${
    apiEndPoint === "everything?" ? "" : country
  }&apiKey=${apiKey}`;

  // todos
  // make search bar to search by keywords
  // have selectors for endpoint(headlines, everything, search query), country, and category
  // sort by data possiblity (newsapi.org/v2/everything?q=apple&from=2020-06-10&to=2020-06-10&sortBy=popularity)
  // search by domains (newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com + apikey)

  const fetchTopHeadlines = async () => {
    const res = await fetch(testingURL);
    const data = await res.json();
    if (!data.status === "ok") return;
    console.log(`Found ${data.totalResults} articles`);
    console.log(data.articles);
    setStories(data.articles);
  };

  useEffect(() => {
    fetchTopHeadlines();
  }, [apiEndPoint]);

  const testJson = JSON.stringify(stories, null, 2);

  const handleEndPoint = (event) => {
    // event.preventDefault();
    setApiEndPoint(event.target.value);
    console.log(testingURL);
    console.log(apiEndPoint);
    console.log(apiEndPoint === event.target.value);
  };

  return (
    <div>
      <form action="#">
        <p>
          <label>
            <input
              name="group1"
              type="radio"
              checked
              value="top-headlines?"
              onClick={(e) => {
                handleEndPoint(e);
                // setApiEndPoint("top-headlines");
                // console.log(testingURL);
              }}
            />
            <span>Top Headlines</span>
          </label>
        </p>
        <p>
          <label>
            <input
              name="group1"
              type="radio"
              value="everything?q=bitcoin"
              onChange={(e) => e.preventDefault()}
              onClick={(e) => {
                handleEndPoint(e);
                // setApiEndPoint("everything");
                // console.log(testingURL);
              }}
            />
            <span>All News</span>
          </label>
        </p>
      </form>

      <h1>Stories</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "90vw",
          height: "100vh",
          border: "3px red solid",
          flexWrap: "wrap",
          // overflow: "auto",
          justifyContent: "space-evenly",
        }}
      >
        {stories.map((story) => {
          return <StoryCard story={story} />;
        })}
      </div>
      <pre>{testJson}</pre>
    </div>
  );
};

export default StoriesPage;
