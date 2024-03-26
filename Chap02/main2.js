const targetString = 'JavaScript를 배우자';

document.querySelector('.result1').innerHTML = targetString.indexOf('JavaScript');
document.querySelector('.result2').innerHTML = targetString.indexOf('배우자');

const myString = 'JavaScript를 배우자';

const a1 = 'JavaScript를 배우자'. includes('JavaScript');
console.log(a1);  //결과:true ~ includes()는 위치에 상관업싱 지정 문자열이 포함되어 있다면 true를 반환

const a2 = 'Javacript를 배우자'. startsWith('배우자');
console.log(a2); //결과:false

const a3 = 'JavaScript를 배우자'.endsWith('배우자');
console.log(a3); //결과:true
