import React from 'react';

const PriceComponent = (props) => {
    const {price} = props;
    return (
        <div>
            가격: {price}원
        </div>
    );
};

export default PriceComponent;