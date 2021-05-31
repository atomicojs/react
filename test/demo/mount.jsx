import React from "react";
import ReactDom from "react-dom";
import { Component } from "./react.jsx";

const ref = React.createRef();

ReactDom.render(<Component ref={ref} />, document.querySelector("#app"));

console.log(ref);
