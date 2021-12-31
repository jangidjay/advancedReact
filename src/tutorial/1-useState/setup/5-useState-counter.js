import React, { useState } from "react";

const UseStateCounter = () => {
  let [value, setValue] = useState(0);

  // const decValue = () => {
  //   value -= 1;
  //   setValue(value);
  // };

  // const resValue = () => {
  //   setValue(0);
  // };

  // const incValue = () => {
  //   value += 1;
  //   setValue(value);
  // };

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          Decrease
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          Reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          Increase
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
