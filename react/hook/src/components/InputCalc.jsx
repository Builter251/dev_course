import React from 'react';
import { useState, useMemo } from 'react';

const InputCalc = () => {
    const [hardNum, setHardNum] = useState(0);
    // const hardSum = hardCalc(hardNum);
    const hardSum = useMemo(() => hardCalc(hardNum), [hardNum]);


    function hardCalc (num) {
        // for (let i = 0; i < 10; i++) {console.log(i);}
        return num + 10000;
    }

    return (
        <div>
            <input 
                type="number"
                value={hardNum}
                onChange={(e) => setHardNum(parseInt(e.target.value))} />
            <span> + 10000 = {hardSum}</span>
        </div>
    );
};

export default InputCalc;