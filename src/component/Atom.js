import React, { useState } from "react";
function Atom(){
    const [isMouseOver, setMouseOver] = useState(false);
    function handleMouseOver(){
      setMouseOver(true);
    }
    function handleMouseOut(){
      setMouseOver(false);
    }
      {/* <div className="grid-element">
      E1</div>
      <div className="grid-element" 
          style={{backgroundColor:isMouseOver?"yellow":"black"}}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}      
      >E1</div> */}
      


}
export default Atom;