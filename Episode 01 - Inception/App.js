/*
<div id='parent'>
  <div id='child'>
    <h1>I am h1 tag</h1>
    <h2>I am h2 tag</h2>
  </div>
  <div id='child2'>
    <h1>I am h1 tag</h1>
    <h2>I am h2 tag</h2>
  </div>
</div>
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h1 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h1 tag"),
  ]),
]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", className: "headClass" },
//   "Hello World From React!"
// );

// console.log(heading); // will return an object of React
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); // .render is converting an object into html element
root.render(parent); // .render is converting an object into html element
