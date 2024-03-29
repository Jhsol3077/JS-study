const userName = '고양이';

// 문자열과 변수를 추가할 때마다 +연산자를 사용하면 번거롭고, 가독성이 떨어진다
//const tag = '<div class="container">' + '안녕하세요' + userName + '님' + '</div>';

const tag = `<div class="container">안녕하세요 ${userName} 님 </div>`;
console.log(tag); //결과: <div class="container">안녕하세요 고양이 님</div>

const str2 = `123 x 123은 ${123 * 123}입니다.`;
console.log(str2); //결과: 123 x 123은 15129입니다.

//오늘 날짜 불러오기
const today = new Date();

// #main 내부의 HTML코드를 동적으로 작동하도록 처리
document.querySelector('#main').innerHTML = `
  <h1>오늘${today.getMonth() + 1}/${today.getDate()}의 날씨</h1>
  <p>서울은 흐림</p>
  `;