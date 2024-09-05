import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../themeContext';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import MainComponent from './MainComponent';
import './HomeComponent.css';

const HomeComponent = () => {
    const data = useContext(ThemeContext);
    console.log(data);
    return (
        <div className='container'>
            <HeaderComponent />
            <MainComponent />
            <FooterComponent />
        </div>
    );
};

export default HomeComponent;