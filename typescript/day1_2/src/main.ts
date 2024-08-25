// const add = function (a: number, b: number): number {
//     return a + b;
// }

// function add2(a: number, b: number): number {
//     return a + b;
// }

// const result1 = add2(1, 2);
// const str = 'hello';
// const num = 123;
// const bool = true;
// const n = null;
// const u = undefined;
// const sym = Symbol();
// const obj = { hello: 'world' };

// let Vresult1 = add2(1, 2);
// let Vstr = 'hello';
// let Vnum = 123;
// let Vbool = true;
// let Vn = null;
// let Vu = undefined;
// let Vsym = Symbol();
// let Vobj = { hello: 'world' };

// let sss: 'hello' = 'hello';
// // sss = 'world'; // Error

// const oo = { name: 'Jack', age: 32 };
// const aa = [1, 2, "three"];

// const ooo = { name: 'Jack', age: 32 } as const;
// const aaa = [1, 2, "three"] as const;

// // ooo.name = 'Jane'; // Error
// oo.name = 'Jane'; // OK

// // aaa.push(4); // Error push 속성 없음
// aa.push(4); // OK

// const arr1: string[] = ['1', '2', '3'];
// const arr2: Array<number> = [1, 2, 3];

// const arr3 = [1, '2', 3]; // (number | string)[]
// const arr4 = []; // any[]

// const tuple: [string, number, boolean] = ['hello', 10, true];
// tuple[0] = 'world';
// // tuple[2] = 5; // Error
// tuple.push('tuple'); // OK
// console.log(tuple);

// const tuple2: readonly [string, number, boolean] = ['hello', 10, true];
// // tuple2.push('tuple'); // Error readonly로 순서 깨짐 막기

// const strNumBools: [string, number, ...boolean[]] = ['hello', 10, true, false];

// const [a, ...rest] = ['hello', 1, 2, 3];
// const [b, ...rest2]: [string, ...number[]] = ['hello', 1, 2, 3];

// function foo(a: number, b: Number) {
//     // return a + b; // '+' 연산자를 'number' 및 'Number' 형식에 적용할 수 없습니다.
// }

// const sss1: String = 'hello';
// // const sss2: string = sss1; // 'String' 형식은 'string' 형식에 할당할 수 없습니다. string'은(는) 기본 개체이지만 'String'은(는) 래퍼 개체입니다. 가능한 경우 'string'을(를) 사용하세요.

// function foo2(a: number, b: number) {
//     return a + b;
// }
// // const foo2Result: foo2(1,2) = foo2(1, 2); // foo2'은(는) 값을 참조하지만, 여기서는 형식으로 사용되고 있습니다. 'typeof foo2'을(를) 사용하시겠습니까?
// // const foo2Result: typeof foo2(1, 2) = foo2(1, 2); //할당 식의 왼쪽은 변수 또는 속성 액세스여야 합니다.
// const foo3: typeof foo2 = (a: number, b: number) => a + b;

// // union type
// let strNum: string | number = 'hello';
// strNum = 10;

// function unionType(value: string | number): number {
//     // return parseInt(value); // 'string | number' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다. 'number' 형식은 'string' 형식에 할당할 수 없습니다.
//     if (typeof value === 'string') {
//         return parseInt(value);
//     } else {
//         return value;
//     }
// }
// unionType('10');
// unionType(10);

// // any
// const anyArr = [];
// anyArr.push('1');
// anyArr.push(2);
// anyArr;

// //...

// // unknown
// try {

// } catch (e) {
//     // console.log(e.name); // 'name'은(는) 'unknown' 형식에 존재하지 않습니다.

//     // if (e instanceof Error) {
//     //     console.log(e.message);
//     // }
//     // 또는
//     const error = e as Error;
//     console.log(error.message);
// }

// // 타입 단언: as ~ 또는 !
// // 개발자가 컴파일러보다 타입을 더 잘 알고 있을 때 사용

// // quiz
// // 1.
// // let name = 'kim';
// let quizName: string = 'kim';

// // 2.
// // function add (a,b) { return a + b; }
// function quizAdd(a: number, b: number): number {
//     return a + b;
// }

// // 3.
// // function isEven(num) { return num % 2 === 0; }
// function isEven(num: number): boolean {
//     return num % 2 === 0;
// }

// const obj1: {} = { name: 'kim' };
// const num1: {} = 123;
// const bool1: {} = true;
// const str1: {} = 'hello';
// const func1: {} = function () { };
// // const n: {} = null; // 'null' 형식은 '{}' 형식에 할당할 수 없습니다.
// // const u: {} = undefined; // 'undefined' 형식은 '{}' 형식에 할당할 수 없습니다.

// type Name = {
//     firstName: string;
//     lastName: string;
// }
// let name1: Name = { firstName: 'kim', lastName: 'jane' };

// type MathOp = (a: number, b: number) => number;
// const add3: MathOp = (a, b) => a + b;
// const multiply: MathOp = (a, b) => a * b;

// interface Animal {
//     name: string;
//     age: number;
// }
// interface Dog extends Animal {
//     breed: string;
// }
// const dog: Dog = { name: 'merry', age: 2, breed: 'poodle' };

// interface Product {
//     name: string;
//     price: number;
//     description?: string;
// }
// const product1: Product = { name: 'goods', price: 1000 };
// const product2: Product = { name: 'goods', price: 1000, description: 'this is goods' };


// interface Dictionary {
//     [key: string]: string;
// }
// const dictionary: Dictionary = { a: 'b' };
// dictionary["apple"] = "A fruit that is sweet and crisp.";
// dictionary["banana"] = "A long yellow fruit that is soft inside.";
// dictionary["car"] = "A vehicle that is used for transportation.";


// function getFirstElement<T>(array: T[]): T | undefined {
//     return array[0];
// }
// const numbers = [1, 2, 3];
// const firstNumber = getFirstElement(numbers); // 1
// const strings = ["apple", "banana", "car"];
// const firstString = getFirstElement(strings); // "apple"

// // length 속성을 가진 객체를 받는 제네릭 함수 getLength를 정의합니다.
// function getLength<T extends { length: number }>(obj: T): number {
//     return obj.length;
// }
// const array = [1, 2, 3];
// const string = "hello";
// const arrayLength = getLength(array); // 3
// const stringLength = getLength(string); // 5
// const objWithoutLength = { name: "example" };
// // const lengthOfObj = getLength(objWithoutLength); // 오류 발생

// function getMax<T extends number>(a: T, b: T): T {
//     return a > b ? a : b;
// }
// const maxNumber = getMax(10, 20); // 20

// //isString<T>
// function isString<T>(value: T): boolean {
//     return typeof value === "string" ? true : false;
// }

// type isString<T> = T extends string ? true : false;
// type result = isString<string>; // true
// type result2 = isString<number>; // false

// type StringS<T> = T extends string ? T : never;
// type result3 = StringS<'asdf' | 4234 | true>; // 'asdf'
