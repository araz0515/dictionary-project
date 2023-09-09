import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.data) {
    return (
      <div className="Results">
        <section>
          <h2>{props.data.word}</h2>
          <p className="phonetic">{props.data.phonetic}</p>
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
