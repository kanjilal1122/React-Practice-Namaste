import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", {}, [
  React.createElement("div", { className: "paragraph" }, [
    React.createElement("section", {}, [
      React.createElement("p", {}, "This is a paragraph."),
      React.createElement("p", {}, "This is another paragraph."),
    ]),
  ]),
  React.createElement("h1", { className: "h1" }, "🚀Hello I am a Heading 🚀"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
