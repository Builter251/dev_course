import React from 'react';
import { useState } from 'react';

const ClickCountComponent = () => {
    const [value, setValue] = useState(0);
    function printValue() {
        // value++;
        // value++는 안되고 value+1은 된다. 왜 그럴까?
        // value++는 value값을 증가시키는 것이 아니라 value값을 반환하고 1을 증가시킨다.
        // 그래서 value값이 변하지 않는다.
        // value+1은 value값에 1을 더한 값을 반환한다.
        // 그래서 value값이 변한다.
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