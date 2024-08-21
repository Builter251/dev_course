"use strict";
const add = function (a, b) {
    return a + b;
};
function add2(a, b) {
    return a + b;
}
const result1 = add2(1, 2);
const str = 'hello';
const num = 123;
const bool = true;
const n = null;
const u = undefined;
const sym = Symbol();
const obj = { hello: 'world' };
let Vresult1 = add2(1, 2);
let Vstr = 'hello';
let Vnum = 123;
let Vbool = true;
let Vn = null;
let Vu = undefined;
let Vsym = Symbol();
let Vobj = { hello: 'world' };
let sss = 'hello';
// sss = 'world'; // Error
const oo = { name: 'Jack', age: 32 };
const aa = [1, 2, "three"];
const ooo = { name: 'Jack', age: 32 };
const aaa = [1, 2, "three"];
// ooo.name = 'Jane'; // Error
oo.name = 'Jane'; // OK
// aaa.push(4); // Error push 속성 없음
aa.push(4); // OK
const arr1 = ['1', '2', '3'];
const arr2 = [1, 2, 3];
const arr3 = [1, '2', 3]; // (number | string)[]
const arr4 = []; // any[]
const tuple = ['hello', 10, true];
tuple[0] = 'world';
// tuple[2] = 5; // Error
tuple.push('tuple'); // OK
console.log(tuple);
const tuple2 = ['hello', 10, true];
// tuple2.push('tuple'); // Error readonly로 순서 깨짐 막기
const strNumBools = ['hello', 10, true, false];
const [a, ...rest] = ['hello', 1, 2, 3];
const [b, ...rest2] = ['hello', 1, 2, 3];
function foo(a, b) {
    // return a + b; // '+' 연산자를 'number' 및 'Number' 형식에 적용할 수 없습니다.
}
const sss1 = 'hello';
// const sss2: string = sss1; // 'String' 형식은 'string' 형식에 할당할 수 없습니다. string'은(는) 기본 개체이지만 'String'은(는) 래퍼 개체입니다. 가능한 경우 'string'을(를) 사용하세요.
function foo2(a, b) {
    return a + b;
}
// const foo2Result: foo2(1,2) = foo2(1, 2); // foo2'은(는) 값을 참조하지만, 여기서는 형식으로 사용되고 있습니다. 'typeof foo2'을(를) 사용하시겠습니까?
// const foo2Result: typeof foo2(1, 2) = foo2(1, 2); //할당 식의 왼쪽은 변수 또는 속성 액세스여야 합니다.
const foo3 = (a, b) => a + b;
// union type
let strNum = 'hello';
strNum = 10;
function unionType(value) {
    // return parseInt(value); // 'string | number' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다. 'number' 형식은 'string' 형식에 할당할 수 없습니다.
    if (typeof value === 'string') {
        return parseInt(value);
    }
    else {
        return value;
    }
}
unionType('10');
unionType(10);
// any
const anyArr = [];
anyArr.push('1');
anyArr.push(2);
anyArr;
//...
// unknown
try {
}
catch (e) {
    // console.log(e.name); // 'name'은(는) 'unknown' 형식에 존재하지 않습니다.
    // if (e instanceof Error) {
    //     console.log(e.message);
    // }
    // 또는
    const error = e;
    console.log(error.message);
}
// 타입 단언: as ~ 또는 !
// 개발자가 컴파일러보다 타입을 더 잘 알고 있을 때 사용
// quiz
// 1.
// let name = 'kim';
let quizName = 'kim';
// 2.
// function add (a,b) { return a + b; }
function quizAdd(a, b) {
    return a + b;
}
// 3.
// function isEven(num) { return num % 2 === 0; }
function isEven(num) {
    return num % 2 === 0;
}
