import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  console.log(props);
  if (props.data) {
    return (
      <div className="Results mt-4">
        <h2>{props.data.word}</h2>
        <p>{props.data.phonetic}</p>
        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
