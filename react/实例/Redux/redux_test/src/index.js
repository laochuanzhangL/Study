import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
import App from "./App";
ReactDOM.render(<App />, document.getElementById("root"));
store.subscribe(() => {
  console.log(123);
  ReactDOM.render(<App />, document.getElementById("root"));
});
