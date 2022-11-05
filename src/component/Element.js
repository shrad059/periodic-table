import React, { useState } from "react";
import data from "./data";

function Element(props) {
  // let {num} = this.props.number;
  // let element=data[num];
  const [num, setName] = useState(0);
  function changeNumber(){
    for(let i=0; i<data;i++){
      setNum(i);
    }
  }

  return (
    <div className="grid-element"
      // title={element.name}
      className={`element element-${setNum}`}
    >
    {props.symbol}
    </div>


  );
}

export default Element;
