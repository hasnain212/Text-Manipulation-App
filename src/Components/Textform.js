import React, { useState } from "react";

export default function Textform(props) {
  //change text to upper-case
  const handleUpClicked = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
  }
  //change text to lower-case
  const handleLoClicked = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
  }
  //clear the text
  const handleClearClicked = ()=>{
    let newText ='';
    setText(newText)
  }

  const handleOnChange = (event)=>{
    setText(event.target.value)
  }
  const [text, setText] = useState("");
  
  return (
    <>
    <div>
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange = {handleOnChange}
          id="my-box"
          rows="10"
        ></textarea>
      </div>
      <button type="button" className="btn btn-danger mx-3" onClick={handleUpClicked}>
        convert to uppercase
      </button>
      <button type="button" className="btn btn-danger" onClick={handleLoClicked}>
        convert to lowercase
      </button>
      <button type="button" className="btn btn-danger mx-3" onClick={handleClearClicked}>
        clear text
      </button>
  
      {/* <h4>{text}</h4> */}
    </div>

    <div className="container">
      <h3>YOUR TEXT SUMMARY</h3>
     <p>{text.split(' ').length} words and {text.length} charecters</p>
     <p> {0.008 * text.split(' ').length} minute to read the paragraph</p>

     <h2>PREVIEW</h2>
     <p>{text}</p>
    </div>
    </>
  );
}
