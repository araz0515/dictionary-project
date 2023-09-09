import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [value, setValue] = useState(props.defaultValue);
  let [data, setData] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function displayDefinition(response) {
    setData(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    //documentation: https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "ea34ad36f9tbf5ceb9037o7457b5a408";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${value}&key=${apiKey}`;
    axios.get(apiUrl).then(displayDefinition);
  }

  function handleUpdate(event) {
    event.preventDefault();
    setValue(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <h1 className="text-center mt-5">Dictionary</h1>
        <section>
          <h2>What word do you want to look up?</h2>
          <form className="text-center" onSubmit={handleSubmit}>
            <input
              type="search"
              defaultValue={props.defaultValue}
              autoFocus={true}
              onChange={handleUpdate}
            />
          </form>
          <div className="hint">
            Suggested words: sunset, yoga, forest, crops...
          </div>
        </section>
        <Results data={data} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
