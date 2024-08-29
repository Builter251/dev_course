import React from 'react';
import "./FoodMenu.css"; 

const FoodMenu = (props) => {

    const {link, name, desc, price} = props;
    return (
        <div className='foodList'>
            <img className='foodImg' src={link} alt="" srcset="" />
            <h2 className='foodName'>{name}</h2>
            <p className='foodDescription'>{desc}</p>
            <p className='foodPrice'>{price}</p>
        </div>
    );
};

export default FoodMenu;