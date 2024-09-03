// useState와 useRef의 차이점
// useState는 컴포넌트에서 상태를 관리할 때 사용하는 Hook입니다. 상태가 바뀔 때마다 컴포넌트가 리렌더링됩니다.
// useRef는 일반 값을 담을 수 있는 객체입니다. useRef로 관리하는 값은 바뀌어도 컴포넌트가 리렌더링되지 않습니다.
// useRef를 사용할 때는 다음과 같이 사용합니다.
// const value = useRef(initialValue);
// useRef는 다음과 같은 상황에서 사용합니다.
// 1. setTimeout, setInterval의 id
// 2. 외부 라이브러리를 사용하여 생성된 인스턴스
// 3. scroll 위치
// 4. 값이 바뀌어도 컴포넌트가 리렌더링되지 않아야 하는 값을 관리할 때

import React from 'react';
import { useRef } from 'react';

const PracticeUseRef = () => {
    const ref = useRef('initialValue');
    console.log("ref before: ",ref.current); // 'initialValue'
    ref.current = 'changedValue';
    console.log("ref after: ",ref.current); // 'changedValue'

    return (
        <div>
            
        </div>
    );
};

export default PracticeUseRef;