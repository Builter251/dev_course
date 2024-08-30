import React from 'react';
import { useState } from 'react';

const Cart = (props) => {
    const [cart, setCart] = useState([
        { name: '모자', price: 1, checked: false },
        { name: '신발', price: 3, checked: false },
        { name: '가방', price: 8, checked: false },
    ]);

    const [totalPrice, setTotalPrice] = useState(0);

    function handleCheckboxChange(e) {
        const nextCart = cart.map((item) => {
            if (item.name === e.target.name) {
                return {
                    ...item,
                    checked: !item.checked,
                };
            } else {
                return item;
            }
        });
        setCart(nextCart);

        // 총 가격을 바로 재계산하여 상태로 설정합니다.
        const newTotalPrice = nextCart.reduce((acc, cur) => {
            return cur.checked ? acc + cur.price : acc;
        }, 0);

        setTotalPrice(newTotalPrice); // 총 가격을 업데이트합니다.
    }


    return (
        <div>
            <h2>장바구니</h2>
            {cart.map((item) => {
                return (
                    <div key={item.name}>
                        <input type="checkbox" name={item.name} id={item.name} checked={item.checked} onChange={(e) => handleCheckboxChange(e)} />
                        <span>{item.name} {item.price}만원</span>
                    </div>
                );
            })}
            <p>합계: {totalPrice} 만원</p>
        </div>
    );
};

export default Cart;