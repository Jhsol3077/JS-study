// instanceof는 데이터가 객체의 인스턴스인지를 확인하는 연산자

const today = new Date();

console.log(today instanceof Date); // 결과: true
console.log(today instanceof Array); // 결과: false

function showCurrentDate(argument) {
  if (argument instanceof Date) {
    console.log(`현재는 ${argument.toLocaleDateString()}입니다.`);
  } else {
    console.log(`적절한 데이터 타입이 아닙니다.`);
  }
}

const today1 = new Date();
const myArray = [1,2,3];

showCurrentDate(today1);
showCurrentDate(myArray); // 결과: 적절한 데이터 타입이 아닙니다.


