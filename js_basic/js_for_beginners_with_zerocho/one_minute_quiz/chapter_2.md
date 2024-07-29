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

```