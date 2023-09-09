import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  console.log(props);
  if (props.data) {
    return (
      <div className="Results mt-4">
        <section>
          <h2>{props.data.word}</h2>
          <p>{props.data.phonetic}</p>
        </section>
        {props.data.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
