import React from 'react';
import { useReducer, useState } from 'react';
import kioskReducer from './kioskReducer';




    const Kiosk = () => {
        const [state, dispatch] = useReducer(kioskReducer, 0);
        const [sandwichCount, setSandwichCount] = useState(0);
        const [friesCount, setFriesCount] = useState(0);
        const [drinkCount, setDrinkCount] = useState(0);
        const [saladCount, setSaladCount] = useState(0);
        
        function sandwich() {
            dispatch({ type: 'SANDWICH' });
            setSandwichCount(sandwichCount + 1);
        }

        function fries() {
            dispatch({ type: 'FRIES' });
            setFriesCount(friesCount + 1);
        }

        function drink() {
            dispatch({ type: 'DRINK' });
            setDrinkCount(drinkCount + 1);
        }

        function salad() {
            dispatch({ type: 'SALAD' });
            setSaladCount(saladCount + 1);
        }

        return (
            <div>
                <h2>Toast Kiosk</h2>

                <h3>Menu</h3>
                <ul>
                    <li>🥪 Sandwich 5000￦</li>
                    <li>🍟 Fries 1500￦</li>
                    <li>🥤 Drink 1000￦</li>
                    <li>🥗 Salad 3000￦</li>
                </ul>
        
                <button onClick={sandwich}>🥪</button>
                <button onClick={fries}>🍟</button>
                <button onClick={drink}>🥤</button>
                <button onClick={salad}>🥗</button>

                <h3>Cart</h3>
                <ul>
                    {sandwichCount > 0 && <li>🥪 Sandwich - {sandwichCount}</li>}
                    {friesCount > 0 && <li>🍟 Fries - {friesCount}</li>}
                    {drinkCount > 0 && <li>🥤 Drink - {drinkCount}</li>}
                    {saladCount > 0 && <li>🥗 Salad - {saladCount}</li>}
                </ul>
                

                <p>Total Cost is {state}￦</p>
            </div>
        );
    };


export default Kiosk;