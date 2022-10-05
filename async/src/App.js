import React, { useEffect } from "react";

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

  return <div className="App"></div>;
}

export default App;
