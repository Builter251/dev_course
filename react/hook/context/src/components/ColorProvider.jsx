import React, { createContext, useState, useContext } from 'react';
import ColorBox from './ColorBox';

// Context 생성
const ColorContext = createContext();

// ColorProvider 컴포넌트
export const ColorProvider = () => {
    const [color, setColor] = useState('green'); // 기본 색상 값

    const handleChangeColor = (event) => {
        setColor(event.target.value);
    };

    return (
        <ColorContext.Provider value={color}>
            <input
                type="text"
                value={color}
                onChange={(handleChangeColor)}
                placeholder="Enter color"
            />
            <ColorBox />
        </ColorContext.Provider>
    );
};

// useColor 커스텀 훅
export const useColor = () => useContext(ColorContext);

export default ColorProvider;
