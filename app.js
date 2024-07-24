import React from "react";
import ReactDOM from "react-dom/client";

// const react_div_child = React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "React recap"), React.createElement("h2", {}, "React recap")]);
// console.log(react_div_child);
// const react_div_parent = React.createElement("div", { id: "parent" }, [react_div_child]);

const react_div_child = React.createElement("h1", {}, "Heading");
console.log(react_div_child);

// JSX  elements
const jsx_heading = (<div>
<h1>Hello</h1>
<div>
    <h2>I am</h2>
    </div>
    </div>
)

const name = "Josh Perez";
const element_name = <h1>Hello, {name}</h1>;

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Harper",
  lastName: "Perez",
};

// jsx COMPONENTS

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }


  function App() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
    );
  }

const element = <h1 className="hello">Hello, {formatName(user)}!</h1>;
const react_root = ReactDOM.createRoot(document.getElementById("root"));
console.log("react_root", react_root);
react_root.render(element);

