import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import "regenerator-runtime/runtime";
import hostData from "./zoid-sdk";

// console.log(
//     window.getComputedStyle(document.body, null).getPropertyValue("background-color")
// );
// window.getComputedStyle(document.body, null).getPropertyValue("width");
// ~document.body.clientWidth;

ReactDOM.render(<App hostData={hostData} />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
