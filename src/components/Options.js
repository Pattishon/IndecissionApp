import React from "react";
import Option from "./Option";

const Options = props => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your options</h3>
      <button className="button button--link" onClick={props.removeAll}>
        Remove all options
      </button>
    </div>

    {props.options.length === 0 && (
      <p className="widget__message">
        No options to choose from, please add options
      </p>
    )}
    {props.options.map((option, index) => (
      <Option
        key={index}
        text={option}
        handleDeleteOption={props.handleDeleteOption}
        count={index + 1}
      />
    ))}
  </div>
);

export default Options;
