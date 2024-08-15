import { useState } from "react";
import React from "react";

function Text(props) {
  const [text, setText] = useState("enter text here ");

  const handleUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <h1> Enter the text to analyse</h1>
      <div>
        <div className="mb-3">
          <textarea
            className="form-control "
            style={{backgroundColor: props.mode === 'light' ? 'white' : '#3C3D37',
            color: props.mode === 'light' ? 'black' : 'white',}}
            
            id="myBox"
            rows="3"
            value={text}
            onChange={handleOnChange}
          ></textarea>
          <button
            className="btn btn-primary mx-2 my-2 "
            onClick={handleUpclick}
          >
            convert to uppercase{" "}
          </button>
          <button
            className="btn btn-primary mx-2 my-2 "
            onClick={handleLoclick}
          >
            convert to lowercase{" "}
          </button>
        </div>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

export default Text;
