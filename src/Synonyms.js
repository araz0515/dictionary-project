import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <span>
          <strong>Synonyms</strong>
        </span>
        {props.synonyms.map(function (synonyms, index) {
          return (
            <span className="synonyms" key={index}>
              {" "}
              {synonyms}
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
