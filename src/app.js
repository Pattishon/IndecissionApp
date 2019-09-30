import React from "react";
import ReactDOM from "react-dom";
import IndecissionApp from "./components/IndecissionApp";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

ReactDOM.render(<IndecissionApp />, document.getElementById("root"));
