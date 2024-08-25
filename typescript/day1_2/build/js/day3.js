"use strict";
// removeD 메서드. 배열 중복 요소제거, 중복이 제거된 새로운 배열을 반환. 제네릭 사용-다양한 타입의 배열에서 대응 가능
// function removeD<T>(arr: T[]): T[] {
//     return Array.from(new Set(arr));
// }
// 배열의 길이를 반환하거나, 문자열의 길이를 반환하는 오버로딩 함수 작성
// function len(s: string): number;
// function len<T>(arr: T[]): number;
// function len(s: string | any[]): number {
//     return s.length;
// }
// // console.log(len('hello')); // 5
// console.log(len([1, 2, 3])); // 3
// 조건부 타입 FirstElement 정의. 튜플 타입으 인자로 받아서 첫번째 요소의 타입을 반환. infer 키워드 사용. 튜플의 첫번째 요소의 타입을 추출
// type FirstElement<T> = T extends [infer U, ...any[]] ? U : never;
// // FirstElement 타입을 사용하는 함수
// function getFirstElement<T extends any[]>(arr: T): FirstElement<T> {
//     return arr[0];
// }
// type Tuple1 = [string, number, boolean];
// type Tuple2 = [boolean, number];
// console.log(getFirstElement<Tuple1>(['hello', 1, true])); // hello
// console.log(getFirstElement<Tuple2>([true, 2])); // true
class Animal {
}
