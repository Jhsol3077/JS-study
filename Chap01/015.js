const myPrice = 100;

if (myPrice >= 50) {
  alert('myPrice는 50 이상입니다.');
} else if (myPrice >= 10) {
  alert('myPrice는 10이상 50미만입니다. ');
} else {
  alert('myPrice는 10미만입니다.');
};

if(true) {
  alert('Hello');
}

const randomNum = Math.random() * 10;
if (randomNum >= 5) {
  alert('randomNum는 5 이상');
} else {
  alert('randomNum는 5 미만');
}

const myFruit = '사과';

switch (myFruit) { //switch 식은 값과 타입의 비교가 모두 이루어진다, === 비교 수행
  case '사과':
    alert('사과입니다.');
    break;
  case '귤':
    alert('귤입니다.');
    break;
  default: //만족하는 조건이 하나도 없는 경우의 처리
    alert('기타 과일입니다.');
    break;
}