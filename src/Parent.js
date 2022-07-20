import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor, setChildrenColor] = useState("#FFF")

  function handleColor(newChildColor) {
    const newRanDomColor = getRandomColor()
    setColor(newRanDomColor)
    setChildrenColor(newChildColor)
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={ childrenColor } onChangeColor={ handleColor }/>
      <Child color={ childrenColor } onChangeColor={ handleColor }/>
    </div>
  );
}

export default Parent;
