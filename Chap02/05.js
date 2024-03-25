const targetString1 = '   안녕하세요     ';
const trimmedString1 = targetString1.trim();
console.log(trimmedString1);  //결과: '안녕하세요'

//줄바꿈 문자가 삽입되어 있는 경우
const targetString2 = '사과를 먹었어요\n';
const trimmedString2 = targetString2.trim();
console.log(trimmedString2); //결과: '사과를 먹었어요', 줄바꿈 제거됨

//문자열 사이의 공백은 제거되지 않음
const targetString3 = ' 사과. 귤.';
const trimmedString3 = targetString3.trim();
console.log(trimmedString3);v//결과: '사과.귤.'

const myString = 'JavaScript를 배우자';

//지정 문자열이 존재할 때
const a1 = myString.indexOf('JavaScript');
console.log(a1); // 결과: 0

const a2 = myString.indexOf('배우자');
console.log(a2);   //결과:12

const a3 = myString.lastIndexOf('a');
console.log(a3); //결과: 3

//지정 문자열이 존재하지 않을 때
const b1 = myString.indexOf('HTML');
console.log(b1);  // 결과: -1

const b2 = myString.indexOf('j');
console.log(b2); //결과: -1

const myString1 = 'JavaScript를 배우자';
const c1 = myString.indexOf('JavaScript', 4);
console.log(c1); //결과: -1

