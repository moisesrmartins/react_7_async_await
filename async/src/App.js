import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log(1);
  });
  alert(1);

  return <div className="App"></div>;
}

export default App;
