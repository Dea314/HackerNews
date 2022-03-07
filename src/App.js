import { useState, useEffect } from "react";
import React from "react";
import "./index.css";
import Form from "./components/Form";
import axios from "axios";

const App = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [news, setNews] = useState([]);

  const basicAPI = `https://hn.algolia.com/api/v1/search?query=react`;
  useEffect(() => {
    axios.get(basicAPI).then(
      (res) => {
        setIsLoaded(true);
        setNews(res.data.hits);
      }).catch((err) => {
        setError(error);
        console.error(error);
        setIsLoaded(false);
      }
    );
  }, []);

  console.log("news", news);
  if (error) {
    return <>Error: {error.message}</>;
  } else if (!isLoaded) {
    return <>Loading...</>;
  } else {
    return (
      <div className="App">
        <h1 className="heading">Hacker News</h1>
        <Form />
        <ul>
          {news.map((story) => (
            <li key={story.objectID}>
              {story.title}
              <br />
              <span>By: {story.author}</span>
              <br />
              <span>Points: {story.points}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default App;
