import React from "react"
import ClickButton from "./components/ClickButton"
import DisplayCard from "./components/DisplayCard"
import "./App.css"

function App() {
  return (
    <div className="grid-container">
      <div className="grid-item"><ClickButton /></div>
      <div className="grid-item"><DisplayCard /></div>
    </div>
  );
}

export default App;
