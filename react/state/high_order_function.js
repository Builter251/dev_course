// 1번 문제
const numbers = [5,10,15,20,25,30];
numbers.forEach((number) => {
    if(number % 2 === 0) {
        numbers.splice(numbers.indexOf(number), 1);
    }
});
console.log('1번 문제');
console.log('배열 남은 요소: ', numbers);
console.log('-----------------------------------');

// 2번 문제
console.log('2번 문제');
const fruits = [
    {name: 'apple', amount: 2, price: 1000},
    {name: 'banana', amount: 3, price: 2500},
    {name: 'orange', amount: 5, price: 5000},
];

fruits.find((fruit) => {
    if(fruit.name === 'apple') {
        console.log(fruit.name, fruit.amount, fruit.price);
    }
    if(fruit.name === 'banana') {
        console.log(fruit.name, fruit.amount, fruit.price);
    }
    if(fruit.name === 'orange') {
        console.log(fruit.name, fruit.amount, fruit.price);
    }
});
console.log('-----------------------------------');

// 3번 문제
console.log('3번 문제');
const array = ["javascript", "css", "react", "html"];

let result = [];
let currentIndex = 0;

while (currentIndex < array.length) {
    const item = array.find((element, index) => index >= currentIndex && element.length >= 5);
    if (item) {
        result.push({ item: item, length: item.length });
        currentIndex = array.indexOf(item) + 1;
    } else {
        break;
    }
}

console.log(result);
console.log('-----------------------------------');

// 4번 문제
console.log('4번 문제');
const numbers2nd = [5, 19, 42, 36, 70];
const newNumbers = numbers2nd.map((num1) => num1 * 2).map((num2) => {
    if(num2 % 3 === 0) {
        return num2 * 2;
    } else {
        return num2;
    }
});
console.log(newNumbers);