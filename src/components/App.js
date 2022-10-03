import React, { useState } from "react";
import Login from'./Login.js';

function App() {
  const[id, setId] = useState();

  return (
    <>
      {id}
      <Login onIdSubmit={setId} />
    </> 
  )
}

export default App;
