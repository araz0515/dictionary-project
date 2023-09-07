import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [value, setValue] = useState(null);
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${value} definition...`);
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
