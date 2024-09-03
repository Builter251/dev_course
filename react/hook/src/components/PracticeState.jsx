import React, { useState } from 'react';

const PracticeState = () => {
    const [count, setCount] = useState(0);
    const [names, setNames] = useState([]);
    const [name, setName] = useState('');

    const inputChange = (e) => {
        setName(e.target.value);
    };

    const uploadName = () => {
        setNames([...names, name]);
        setName(''); // Clear the input field
    };

    return (
        <div>
            <p>현재 카운터 값은 {count}입니다.</p>
            <button onClick={() => setCount(count + 1)}>증가</button>
            <button onClick={() => setCount(count - 1)}>감소</button>
            <hr />
            <input
                type="text"
                value={name} // Make sure the input field is bound to the `name` state
                onChange={inputChange} // Update the `name` state on change
            />
            <button onClick={uploadName}>Upload</button>
            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
};

export default PracticeState;
