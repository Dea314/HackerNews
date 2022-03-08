import { useState, useEffect } from "react";
import React from "react";
import "./index.css";
import Form from "./components/Form";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import Pagination from "./components/Pagination";
import axios from "axios";

const App = () => {
  const [error, setError] = useState(null);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [perpage, setPerpage] = useState([]);
  const [query, setQuery] = useState("react");

  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

  useEffect(() => {
    const basicAPI = `https://hn.algolia.com/api/v1/search?query=${query}`;
    setLoading(true);
    axios
      .get(basicAPI)
      .then((res) => {
        setError("");
        setLoading(false);
        setNews(res.data.hits);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
        setLoading(false);
      });
  }, [query]);
  console.log(news);
  return (
      <div className="App">
        <h1 className="heading">Hacker News</h1>
       
        <Form  setQuery={setQuery} />
        {loading ? ( //steffani
          <ClipLoader color="#ffffff" loading={loading} css={override} size={150} /> 
        ) : (
          <ul>
            {news.map((story) => (
              <li className = "list-items" key={story.objectID}>
                {story.title}
                <br />
                <span>By: {story.author}</span>
                <br />
                <span>Points: {story.points}</span>
              </li>
            ))}
          </ul>
          )}
          {news.length === 0 &&
        <h2>
         Invalid search.
        </h2>
      }
          {error !== "" && <h2>Please try again!</h2>}
      </div>
    );

};

export default App;
