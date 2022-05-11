import React, { useState } from "react";
import RateForm from "./components/RateForm";
import ResultForm from "./components/ResultForm";

function App() {

  const [isClicked, setClicked] = useState(false);
  const [rating, setRating] = useState(0); 
 
  return (
    <div className="App">
      <div className="container">
        {isClicked ? (
          <ResultForm rating={rating} />
        ) : (
          <RateForm setClicked={setClicked} rating={rating} setRating={setRating} />
        )}
      </div>
    </div>
  );
}

export default App;
