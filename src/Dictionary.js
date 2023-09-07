import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [value, setValue] = useState(null);
  function displayDefinition(response) {
    console.log(response.data);
  }

  function search(event) {
    event.preventDefault();
    let apiKey = "ea34ad36f9tbf5ceb9037o7457b5a408";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${value}&key=${apiKey}`;
    axios.get(apiUrl).then(displayDefinition);
  }

  function handleUpdate(event) {
    event.preventDefault();
    setValue(event.target.value);
  }
  return (
    <div className="Dictionary">
      <h1 className="text-center mt-5 mb-4">Dictionary</h1>
      <form className="text-center" onSubmit={search}>
        <input
          type="search"
          placeholder="Search dictionary"
          autoFocus={true}
          onChange={handleUpdate}
        />
      </form>
    </div>
  );
}