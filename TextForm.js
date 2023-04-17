import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log('Uppercase was clicked'+ text);
        let newText = text.toUpperCase();
        setText(newText)
        
        //text="new text"//wrong way to change the state
        //setText("new text");//correct way to  change state
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
     const handleclearClick = ()=>{
        let newText = '';
        setText(newText)
    }
   
    const handleOnChange = (event)=>{
        //console.log("on Change");
        setText(event.target.value)
    }
  const [text, setText] = useState('');
   
    return (
    <>
    <div className="container">
       <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
        >  </textarea>
           </div>
               <button className="btn btn-info mx-1" onClick={handleUpClick}>
                UpperCase
               </button>
               <button className="btn btn-info mx-1" onClick={handleLowClick}>
               LowerCase
               </button>
               <button className="btn btn-info mx-1" onClick={handleclearClick}>
               Clear Text
               </button>
               
              
            </div>
       <div className="container my-2">
        <h3>Your Text Summary</h3>
        <p><b>{text.split(" ").length}</b> Words and  <b>{text.length}</b>  characters</p>
        <p><b>{0.08 * text.split(" ").length}</b> minutes to read</p>
        <h4>Preview</h4>
        <p>{text}</p>
     </div>
    </>
  );
}
