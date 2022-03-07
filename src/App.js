import { useState, useEffect } from "react";

const App = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://hn.algolia.com/api/v1/search?query=react")
      .then((res) => res.json())
      .then((data) => {console.log(data); setNews(data.hits)})
      .catch((err) => console.log(err));
  }, []);
console.log(news);
  return (
    <div className="App">
      <h1>Hacker news</h1>
      <ul>
        {news.map((story) => (
          <li key={story.objectID}>{story.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
