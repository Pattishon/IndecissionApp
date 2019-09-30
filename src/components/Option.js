import React from "react";

const Option = props => (
  <li>
    {props.text}
    <button onClick={e => props.handleDeleteOption(props.text)}>remove</button>
  </li>
);

export default Option;
