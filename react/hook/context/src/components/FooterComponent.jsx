import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../themeContext';

const FooterComponent = () => {
    const {darkMode} = useContext(ThemeContext);
    const darkModeStyle = {
        backgroundColor: darkMode ? 'black' : 'white',
        color: darkMode ? 'white' : 'black',
    }

    return (
        <footer style={darkModeStyle}>
            푸터
        </footer>
    );
};

export default FooterComponent;