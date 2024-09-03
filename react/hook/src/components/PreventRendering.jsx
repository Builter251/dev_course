import React from 'react';
import { useRef, useState } from 'react';

const PreventRendering = () => {
    const [currentText, setCurrentText] = useState("");
    const inputText = useRef();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setCurrentText(inputText.current.value);
    }



    return (
        <div>
            <input type="text" name="text" id="text" ref={inputText}/>
            <button onClick={handleSubmit}>전송</button>
            <p>{currentText}</p>
        </div>
    );
};

export default PreventRendering;