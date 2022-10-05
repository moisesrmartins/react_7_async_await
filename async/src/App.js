import React, { useEffect } from "react";

const setPromise = (time, text) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(text);
    }, time);
  });

function App() {
  useEffect(() => {
    console.log(1);
  });

  useEffect(() => {
    setTimeout(() => {
      setTimeout(() => {
        console.log("hi");
      }, 1000);
      console.log("hello");
    }, 2000);
  });

  setPromise(2000, "good morning")
    .then(() => setPromise(1000, "have"))
    .then(() => setPromise(1000, "a"))
    .then(() => setPromise(1000, "nice"))
    .then(() => setPromise(1000, "day"));

  return <div className="App"></div>;
}

export default App;
