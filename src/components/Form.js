import { useState } from "react";
import React from "react";

// use the setQuery property you are passing in App.js
const Form = ({ setQuery }) => {
  const [story, setStory] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // validate the search is not empty
    if (!story) return alert("Serach cannot be empty");
    // set query to the search value, it will make the effect run!
    setQuery(story);
    setStory("");
  };

  return (
    <form onSubmit={handleSubmit} method="POST">
      <label>
        <input
          placeholder="Search..."
          type="text"
          value={story}
          onChange={(e) => setStory(e.target.value)}
          key={story.objectID}
        />
      </label>

      <button type="submit">Search</button>
    </form>
  );
};
export default Form;
