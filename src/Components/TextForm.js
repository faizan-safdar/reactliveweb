import React, { useState } from 'react'



export default function TextForm(props) {

    const toUpper = () => {
        console.log("Uppercase was clicked")
        let up = text.toUpperCase();
        setText(up);
    }
    const toLower = () => {
        console.log("Uppercase was clicked")
        let up = text.toLowerCase();
        setText(up);
    }

    const handleonchange = (event) => {
        console.log("On chnage");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter Text here');
    //setText("Faizan Kesa hai");
    return (
        <>
        
        <div className='container'>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleonchange} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={toUpper}>
                Convert to UpperCase
            </button>
            <button className="btn btn-primary mx-1" onClick={toLower}>
                Convert to LowerCase
            </button>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length-1} words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview Below</h2>
            <p>{text}</p>
        </div>
        </>
    )
}

