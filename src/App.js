import { useState, useEffect } from "react";
import React from "react";
import "./styles.css";
import Form from "./components/Form";
import axios from "axios";

const App = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [news, setNews] = useState([]);
  // Query with initial value
  const [query, setQuery] = useState("react");

  useEffect(() => {
    const basicAPI = `https://hn.algolia.com/api/v1/search?query=${query}`;
    axios.get(basicAPI).then(
      (res) => {
        setIsLoaded(true);
        setNews(res.data.hits);
      },
      (error) => {
        setIsLoaded(false);
        setError(error);
        console.error(error);
      }
    );
    // the effect depends on the query
  }, [query]);

  console.log("news", news);
  if (error) {
    return <>Error: {error.message}</>;
  } else if (!isLoaded) {
    return <>Loading...</>;
  } else {
    return (
      <div className="App">
        <h1 className="heading">Hacker News</h1>
        <Form setQuery={setQuery} />
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
