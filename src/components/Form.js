import { useState } from "react";
import React from "react";

const Form = () => {
  const [story, setStory] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
        <input
        className = "search-bar"
          type="text"
          value={story}
          onChange={(e) => setStory(e.target.value)}
          key={story.objectID}
        />

      <input className = "submit" type="submit" />
    </form>
  );
};
export default Form;