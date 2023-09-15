import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return <h1>Custom Function!</h1>;
}

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click here to Visit",
// };

const element = (
  <a href="https://google.com" target="_blank">
    Visit
  </a>
);

const value = "hello";

const reactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  " Go and Visit ",
  value
);
ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
