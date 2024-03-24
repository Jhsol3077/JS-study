const myName = '사자';
alert(myName);

const myString = '사자';
const myFunction = () => console.log('함수 확인');
//const는 상수를 선언하는 것이므로 값의 변경이 불가능

const number1 = 10;
const number2 = 20;
const sum = number1 + number2;
console.log(sum); //결과값은 30

const familyName='브렌던';
const firstName='아이크';
const fullName =  familyName + firstName;
console.log(fullName); //결과값은 브렌던아이크
//변수는 초기화 과정 생략 가능, 상수는 초기화 과정 생략이 불가능

const myArray=['펭귄', '고래', '참치'];
myArray[0] = '새우';
//myArray[0] 변경, 에러는 발생하지 않음. 상수로 선언된 배열과 객체 내부의 값은 변경이 가능하다
