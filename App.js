import React from "react";
import ReactDOM from "react-dom/client";

/* Ep 1 and 2 code start

// <div id='parent'>
//   <div id='child'>
//     <h1>I am h1 tag</h1>
//     <h2>I am h2 tag</h2>
//   </div>
//   <div id='child2'>
//     <h1>I am h1 tag</h1>
//     <h2>I am h2 tag</h2>
//   </div>
// </div>


const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is Namaste React :-)"),
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

Ep 1 and 2 code end
*/

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hi, I am from React..."
// );

// console.log(heading); // => object

// JSX
// React Element
const heading = (
  <h1 id="heading" className="head" tabIndex="1">
    I am heading variable from JSX...
  </h1>
);

const elem = <span>This is SPAN TAG.</span>;

// React Functional Component
const Heading = () => (
  <h1 id="heading" className="head" tabIndex="1">
    I am from JSX...
  </h1>
);

console.log(Heading);

// React Functional Component
// Long way of creating functional component
const HeadingLongWayComponent = function () {
  return <h1 id="heading">I am from long functional component.</h1>;
};

const number = 2 + 5;

// Short way of creating functional component without RETURN  statement and CURLY BRACES but with ROUND BRACES for multiline JSX
const HeadingShortWayComponent = () => (
  <div className="parent">
    <HeadingLongWayComponent />
    {heading}
    <h1 id="heading">I am from short functional component.</h1>
    <h1>
      {number} means TTD. {elem}
    </h1>
    <h1>{number * number} multiplication of Number by Number.</h1>
  </div>
);

console.log(heading); // => object

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(<HeadingShortWayComponent />);
