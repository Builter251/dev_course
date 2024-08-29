import React from 'react';
import { useState } from 'react';

const ClickCountComponent = () => {
    const [value, setValue] = useState(0);
    function printValue() {
        // value++;
        setValue(1+value);
    }
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={printValue} onMouseOut={() => setValue(0)}>클릭</button>
        </div>
    );
};

export default ClickCountComponent;