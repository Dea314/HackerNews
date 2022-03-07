import { useState } from "react";
import React from "react";


  const [story, setStory] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

          type="text"
          value={story}
          onChange={(e) => setStory(e.target.value)}
          key={story.objectID}
        />

