import React from "react";
import Option from "./Option";

const Options = props => (
  <div>
    <button onClick={props.removeAll}>Remove all options</button>
    {props.options.length === 0 && (
      <p>No options to choose from, please add options</p>
    )}
    <ol>
      {props.options.map((option, index) => (
        <Option
          key={index}
          text={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </ol>
  </div>
);

export default Options;
