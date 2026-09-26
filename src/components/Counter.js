import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <h2>Counter</h2>

      <div className="counter-number">
        {count}
      </div>

      <button onClick={decrease}>−</button>

      <button onClick={increase}>+</button>
    </div>
  );
}

export default Counter;