import { useState } from "react";
import React from "react";

const Form = ({ setQuery }) => {
  const [story, setStory] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!story) return alert("Search cannot be empty");
    setQuery(story);
    setStory("");
  };

  return (
    <form className="form" onSubmit={handleSubmit} method="POST">
      <label>
        <input
          className="search-bar"
          placeholder="Search..."
          type="text"
          value={story}
          onChange={(e) => setStory(e.target.value)}
          key={story.objectID}
        />
      </label>
      <button className="submit" type="submit">
        Search
      </button>
    </form>
  );
};
export default Form;
