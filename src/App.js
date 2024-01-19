import "./App.css"
import React from 'react'
import Accordian from "./Components/Accordian"
import RandomColor from "./Components/Random-Color"
import StarRating from "./Components/Star-Rating"

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      <StarRating noOfStars={10}/>
    </div>
  )
}

export default App