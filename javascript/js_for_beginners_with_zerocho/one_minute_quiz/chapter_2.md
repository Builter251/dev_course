# 제로초의 자바스크립트 입문
## 1분 퀴즈 2장 풀이

1. 다음 문자열이 제대로 표현되게 만드시오.
- Q. '문자열이 긴 경우에는' + '문자열을' + '나눈 뒤' + '다시 합칩니다.';
    - '문자열이 긴 경우에는문자열을나눈 뒤다시 합칩니다.
- A. '문자열이 긴 경우에는 ' + '문자열을 ' + '나눈 뒤 ' + '다시 합칩니다.';
    - '문자열이 긴 경우에는 문자열을 나눈 뒤 다시 합칩니다.

2. 3 ** 2 + 1 을 27로 만들어 보세요.
- Q: 3 ** 2 + 1 = 3<sup>2</sup> + 1 = 9 + 1 = 10
- A: 3 ** (2 + 1) = 3<sup>(2+1)</sup> = 3<sup>3</sup> = 27

3. 5 + 4 * 3 === 27 이 true가 되게 만들어 보세요.
- (5 + 4) * 3 === 27

4. 다음 중 결과 값이 1인 것은?
    1. 1 && 0 === 0
    2. 0 || 1 === 1
    3. 0 ?? 1 === 0
    4. 1 || 0 === 1
    5. 1 ?? 0 === 1

5. a와 b라는 변수에 어떠한 값이 들어 있습니다. 두 변수의 값을 서로 바꿔 보세요.
```javascript
let a = 1;
let b = 2;
let temp = a;
a = b;
b = temp;
```

6. 다음 if 문을 switch 문 / 조건부 연산자(삼항 연산자)로 바꿔 보세요.
```javascript
// if 문
let cond = true;
let value = '';
if (cond) {
    value = '참';
} else {
    value = '거짓';
}
```
```javascript
// switch 문
let cond = true;
let value = '';
switch (cond) {
    case true:
        value = '참';
        break;
    case false:
        value = '거짓';
        break;
}
```
```javascript
// 삼항 연산자
let cond = true;
let value = cond ? '참' : '거짓';
```

7. 1부터 100까지 출력하는 코드를 for 문으로 작성해 보세요.
```javascript
for (let i = 0; i < 100; i++) {
    console.log(i + 1);
}
```

8. 구구단을 출력하되, continue 문을 사용해서 결과가 홀수만 나오게 해 보세요.
```javascript
for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        if ((i * j) % 2 === 0) {
            continue;
        }
        console.log(`${i} ✕ ${j} = ${(i * j)}`);
    }
}
```

9. 이름이 arr인 배열의 마지막에서 세 번째 요소를 찾는 방법은?
- arr[arr.length - 3];
- arr.at(-3);

10. 다음 배열에서 indexOf(), splice()를 이용해 '라'를 모두 삭제해 보세요.
```javascript
const arr = ['가', '라', '다', '마', '라'];

let idx = arr.indexOf('라');
while (idx !== -1 ) {
    arr.splice(idx, 1)
    idx = arr.indexOf('라', idx + 1);
}
```

11. 이차원 배열로 구성해 보세요
```javascript
const twoDimensions = [['a', null],[1, undefined], [NaN, true],['',0]];
```

12. for 문으로 5행 4열의 이차원 배열을 만들어 보세요. (배열 요소는 모두 1)
```javascript
const arr = [];
for (let i = 0; i < 5; i++) {
    arr[i] = [];
    for (let j = 0; j < 4; j++) {
        arr[i][j] = 1;
    }
}
```

13. 매개변수 x, y, z 를 인수로 받아 곱한 값을 반환하는 multiply() 함수를 화살표 함수로 작성해보세요.
```javascript
const multiply = (x, y, z) => {
    return x * y * z;
}
```

14. 다음 고차함수의 결과는?
    - const first = hof(3) => 3 + (b * c);
    - const second = first(4) => 3 + (4 * c); 
    - const third = second(5) => 3 + (4 * 5);
    - console.log(third) === 23

15. 객체 안의 객체의 속성을 교체하려면?
- zerocho.name.last = '김'

16. a를 사용해 b, c name을 고양이로 바꿔 보세요.
```javascript
cosnt a = {
    name: '강아지',
};
const b = a;
const c = b;

a.name = '고양이';
```

17. ~~값 복사~~
```javascript
const a = 'b';
const c = ['d', true, 1];
const e = { g: 'h'};
const i = [{j: 'k'}, {l: 'm'}];
const n = {o: {p: 'q'}};

const a2 = a;
const c2 = c.slice();
const e2 = {...e};
const i2 = JSON.parse(JSON.stringify(i));
const n2 = JSON.parse(JSON.stringify(n));
```

18. ~~구조 분해 할당~~
```javascript
const obj = {
    a: 'hello',
    b: {
        c: 'hi',
        d: {e:'wow'},
    },
};

const a = obj.a;
const c = obj.b.c;
const e = obj.b.d.e;
const {a, b: {c, d:{e}}} = obj;
```

19. forEach() → for
```javascript
const array = [1,3,5,7];
array.forEach((number,index) => {
    console.log(number, index);
})

for(let i = 0; i < array.length; i++){
    console.log(array[i], i);
}
```

20. Array(), fill(), map() 활용하기
```javascript
Array(5).fill().map((v, i) => i * 2 + 3);
```

21. find() 메서드 -> for 문
```javascript
const find = (array, callback) => {
    for(let i  = 0; i < array.length; i++){
        if (callback(array[i])) {
            return array[i];
        }
    }
}
```

22. filter() 메서드 -> for 문
```javascript
const filter = (array, callback)     => {
    const filtered = [];
    for(let i = 0; i< array.length; i++) { 
        if (callback(array[i])) {
            filtered.push(array[i]);
        }
    }
    return filtered
}                             
```

23. ~~reduce() 결과~~
```javascript
[1,2,3,4,5].reduce((a,c)=> {
    a[c] = c* 10;
    return a;
}, {});

{1:10, 2:20, 3:30, 4:40, 5:50}
```

24. some()
```javascript
const array = [null, 'hello', null, undefined, false];
console.log(array.some((value) => value !== null));
```

25. #24. some() -> for
```javascript
let result = false;
for(let i = 0; i < array.length; i++) {
    if(array[i] !== null) {
        result = true;
        break
    }
}
console.log(result);
```

26. class Human
```javascript
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayName() {
        console.log(this.name);
    }

    sayAge() {
        console.log(this.age);
    }
}
```

27. #26 class Developer extends Human
```javascript
class Developer extends Human {
    constructor(name,age,languages) {
        super(name, age);
        this.languages = languages;
    }

    showAvailableLanguages() {
        console.log(this.languages);
    }
}

const builter = new Developer('builter', 6, ['HTML', 'CSS', 'JavaScript']);
builter.showAvailableLanguages(); // ['HTML', 'CSS', 'JavaScript']
```
