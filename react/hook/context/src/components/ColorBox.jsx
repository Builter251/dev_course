import React from 'react';
import { useColor } from '../components/ColorProvider';

const ColorBox = () => {
    const color = useColor();

    const boxStyle = {
        width: '100%',
        height: '100vh',
        backgroundColor: color,
        transition: 'background-color 0.3s ease',
    };

    return <div style={boxStyle}></div>;
};

export default ColorBox;
