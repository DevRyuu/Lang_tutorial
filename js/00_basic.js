/*
변수 선언
var: 변수를 함수 스코프로 선언
let: 재할당이 가능한 변수를 블록 스코프로 선언
const: 상수를 블록 스코프로 선언
*/

/*
데이터 유형
숫자(Number), 문자열(String), 불리언(Boolean), 배열(Array), 객체(Object), 함수(Function), null, undefined
*/

// 객체(Object)의 생성
let person = {
    name: 'John',
    age: 30,
    sayHello: function() {
      console.log('Hello!');
    }
  };
  
// 객체의 프로퍼티(Property) 접근
console.log(person.name); // 'John'

// 객체의 메서드(Method) 호출
person.sayHello(); // 'Hello!'