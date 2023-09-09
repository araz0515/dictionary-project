import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [value, setValue] = useState(props.defaultValue);
  let [data, setData] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function displayDefinition(response) {
    setData(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleImagesResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    //documentation: https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "ea34ad36f9tbf5ceb9037o7457b5a408";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${value}&key=${apiKey}`;
    axios.get(apiUrl).then(displayDefinition);

    let imagesApiKey = "ea34ad36f9tbf5ceb9037o7457b5a408";
    let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${value}&key=${imagesApiKey}`;

    axios.get(imagesApiUrl).then(handleImagesResponse);
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
        <h1 className="text-center pt-5">Dictionary</h1>
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
