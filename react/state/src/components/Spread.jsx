import React from 'react';

const Spread = () => {
    const person1 = {
        name: "홍길동",
        age: 25,
    };

    const person2 = {
        ...person1,
        age: 30,
    };

    const person3 = {
        ...person2,
        address: "서울",
    };

    const person4 = {
        address: "부산", // 서울 출력
        ...person3,
        age: 35,
    };
    return (
        <div>
            <h3>{JSON.stringify(person1)}</h3>
            <h3>{JSON.stringify(person2)}</h3>
            <h3>{JSON.stringify(person3)}</h3>
            <h3>{JSON.stringify(person4)}</h3>
        </div>
    );
};

export default Spread;