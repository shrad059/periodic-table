import React, { useState } from "react";
import Element from "./Element";
import data from "./data";

function App() {
  const [isMouseOver, setMouseOver] = useState(false);
  // state={
  //   showInfo:false,
  //   element:{}
  // }
  //   showInfo = num => {
  //     this.setState({ showInfo: true, element: data[num] })
  //   }

  function handleMouseOver(){
    setMouseOver(true);
  }
  function handleMouseOut(){
    setMouseOver(false);
  }
function createElement(element){
  return(
    <Element
      symbol={element.symbol}
    />
  )
} 
  return (
    <div>
      <h1><span>Periodic Table</span></h1>
      <dl className="grid">
        {data.map(createElement)}
      </dl>
    </div>

  );
}

export default App;
