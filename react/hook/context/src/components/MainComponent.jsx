import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../themeContext';

const MainComponent = () => {

    const {darkMode} = useContext(ThemeContext);
    const darkModeStyle = {
        backgroundColor: darkMode ? 'black' : 'white',
        color: darkMode ? 'white' : 'black',
    }
    return (
        <main style={darkModeStyle}>
            메인
        </main>
    );
};

export default MainComponent;