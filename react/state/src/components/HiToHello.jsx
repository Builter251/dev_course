import React, { useState } from 'react';

const HiToHello = () => {
    const [greeting, setGreeting] = useState(['안녕','Hi']);

    function changeGreeting() {
        const newGreetings = [...greeting];
        newGreetings[1] = 'Hello';
        setGreeting(newGreetings);
    }
    return (
        <div>
            <h2>HiToHello</h2>
            <button type="button" onClick={changeGreeting}>배열 값 변경</button>
            <p>{greeting[0]}</p>
            <p>{greeting[1]}</p>
        </div>
    );
};

export default HiToHello;