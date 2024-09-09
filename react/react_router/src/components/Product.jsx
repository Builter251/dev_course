import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Product = () => {
    // useState 값을 변경할 때, 비동기적으로 바뀐다.
    // setProductId가 실행될 때 까지 15ms의 시간차가 발생한다.
    // 그런데, navigate()가 그 시간차에 바로 실행되어 버려, 값이 바뀌기 전이다.
    // 그래서 두 번 클릭해야
    const [productId, setProductId] = useState('');
    const navigate = useNavigate();

    const clickHandler = (e) => {
        setProductId(e.target.value);
        // navigate(`/product/${productId}`);
    };

    useEffect(() => {
        navigate(`/product/${productId}`);
    }, [productId, navigate]);

    return (
        <div>
            <h2>Product</h2>
            <button onClick={clickHandler} value="p001" type="button">Product 1</button>
            <button onClick={clickHandler} value="p002" type="button">Product 2</button>
            <button onClick={clickHandler} value="p003" type="button">Product 3</button>
        </div>
    );
};

export default Product;