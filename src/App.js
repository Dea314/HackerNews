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
  //const [resultvalue, setResultvalue] = useState([]);
  const [loading, setLoading] = useState(true);
  const [perpage, setPerpage] = useState([]);
  const [query, setQuery] = useState("react");

  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

  useEffect(() => {
    const basicAPI = `https://hn.algolia.com/api/v1/search?query=${query}`; 
    
    axios
      .get(basicAPI)
      .then((res) => {
        setError("");
        setLoading(false);
        setNews(res.data.hits);
        // setResultvalue(res.data.hits.length);
        setPerpage(res.data.hits.slice(0,5));
       
      })
      .catch((error) => {
        console.error(error);
        setError(error);
        setLoading(false);
      });
  }, [query]);

  console.log("news", news);
  console.log(crypto.randomUUID());
  
const pageHandler = (pageNumber) => {
  setPerpage(news.slice((pageNumber*5)-5,pageNumber*5));
}
  return (
      <div className="App">
        <h1 className="heading">Hacker News</h1>
        <Form  setQuery={setQuery} />
        {loading ? ( //steffani
          <ClipLoader color="#ffffff" loading={loading} css={override} size={150} /> 
        ) : (
          <div>
          <ul className="list">
            {perpage.map((story) => (
              <div key={story.objectID}>
              <li className = "list-items">
                {story.title}
                <br /><br/>
                <span>Author: {story.author}</span>
                <br />
                <span>Points: {story.points}</span>
              </li>
              </div>
            ))}
          </ul>
          <Pagination news = {news} pageHandler = {pageHandler} />
          </div>
         
          )}

          {query && !news.length && !loading && (
          <h2>No search results found</h2>)}
         
          { error !== "" && !loading &&
          <h2> Posts are not loading, please try again! </h2>
          }
              
      </div>
      
    );

};

export default App;
