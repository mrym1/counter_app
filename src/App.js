import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(0);

  const colors = [
    {color: "magenta"},
    {color: "gold"},
    {color: "orange"},
    {color: "#42EADDFF"},
    {color: "#FCE77D"},
    {color: "#4831D4"},
    {color: "#E2D1F9"},
    {color: "#990011FF"},
    {color: "#FCEDDA"},
  ];

  const IncNum = () => {
    setCount(count + 1);
  };
  const DecNum = () => {
    setCount(count - 1);
  };

  const handleClick = () => setColor(color + 1 < colors.length ? color + 1 : 0);

  const callDouble = () => {
    DecNum();
    handleClick();
  };
  const callDoubleInc = () => {
    IncNum();
    handleClick();
  };

  return (
    <div>
      <div className="container">
      <button onClick={callDouble}> - </button>
      <h1 style={{ color: colors[color].color}}> {count} </h1>
      <button onClick={callDoubleInc}> + </button>
      </div>
      <button onClick={() => window.location.reload()}> Reload </button>
    </div>
  );
};

export default App;
