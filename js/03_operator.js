/*
스프레드(전개) 연산자
스프레드 연산은 객체 또는 배열의 요소를 분리하여 전개할 수 있기 때문에, 매우 편리하게 사용할 수 있습니다.
*/

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3); // [1, 2, 3, 4, 5, 6]

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3); // {a: 1, b: 2, c: 3, d: 4}

function sum(a, b, c) {
  return a + b + c;
}
const arr = [1, 2, 3];
console.log(sum(...arr)); // 6
