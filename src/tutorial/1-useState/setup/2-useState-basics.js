import React, { useState } from "react";
// useState - function

const UseStateBasics = () => {
  // console.log(useState("hello world"));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const image01 = require("./img/goku.jpg");
  const image02 = require("./img/luffy.jpeg");
  const [text, setText] = useState("random title");
  const [image, setImage] = useState(image01);

  const changeImage = () => {
    if (image === image01) {
      setImage(image02);
    } else {
      setImage(image01);
    }
  };

  const handleClick = () => {
    if (text === "random title") {
      setText("hello world!");
    } else {
      setText("random title");
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <h2>
        <img src={image} alt="" style={{ height: 400, width: 400 }} />
      </h2>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
      <button className="btn" onClick={changeImage}>
        change image
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
