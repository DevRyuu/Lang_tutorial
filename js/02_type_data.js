var a = 10; // a는 숫자 타입
a = "hello"; // a는 문자열 타입으로 변경
a = true; // a는 불리언 타입으로 변경

// 숫자 타입
let num1 = 10;
let num2 = 3.14;
let num3 = 7e5;

// 문자열 타입
let str1 = 'Hello';
let str2 = "world";

// 불리언 타입
let bool1 = true;
let bool2 = false;

// 객체 타입
let obj = {name: 'John', age: 30};

// 배열 타입
let arr = [1, 2, 3];

// 함수 타입
function add(a, b) {
  return a + b;
}

// null은 "값이 없음"을 나타내는 특별한 값입니다. null은 변수에 의도적으로 할당된 상태로, 해당 변수에는 어떤 값도 존재하지 않음을 나타냅니다. null은 객체가 없음을 나타내거나 변수 초기화를 위해 사용될 수 있습니다.
let nullVal = null;

// undefined 타입은 변수가 선언되었지만 값이 할당되지 않은 상태를 나타냅니다. 즉, 변수가 선언되었지만 초기화되지 않았거나 값이 할당되지 않았을 때 undefined가 됩니다.
let undefinedVal = undefined;
let uV;
function myFunction() {
  // 반환되지 않음
}

let obj2 = {
  name: "John",
  age: 30
};

// typeof 연산자를 이용하여 변수의 데이터 타입 출력
console.log(typeof num1); // "number"
console.log(typeof str1); // "string"
console.log(typeof bool1); // "boolean"
console.log(typeof obj); // "object"
console.log(typeof arr); // "object"
console.log(typeof add); // "function"
console.log(typeof nullVal); // "object"
console.log(typeof undefinedVal); // "undefined"
console.log(obj2.address); // undefined
