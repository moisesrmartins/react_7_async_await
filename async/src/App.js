import React, { useEffect } from "react";

const setPromise = (time, text) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(text);
      resolve();
    }, time);
  });

const func = async () => {
  await setPromise(2000, "Thanks");
  await setPromise(1000, "Goodbye");
  return "ME";
};

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
    .then(() => setPromise(1000, "good"))
    .then(() => setPromise(1000, "day"));

  func().then((me) => {
    console.log("END", me);
  });
  return <div className="App"></div>;
}

export default App;
