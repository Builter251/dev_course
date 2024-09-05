import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../themeContext';

const HeaderComponent = () => {
    const  {darkMode, setDarkMode} = useContext(ThemeContext);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    const darkModeStyle = {
        backgroundColor: darkMode ? 'black' : 'white',
        color: darkMode ? 'white' : 'black',
    }

    
    return (
        <header style={darkModeStyle}>
            <h1>헤더</h1>
            {
                darkMode ? (
                    <button className='toggleBtn' onClick={toggleDarkMode}>☀️</button>
                ) : (
                    <button className='toggleBtn' onClick={toggleDarkMode}>🌠</button>
            
                )}   
        </header>
    );
};

export default HeaderComponent;