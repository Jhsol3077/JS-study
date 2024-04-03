//페이지의 스크롤 크기 확인
const x = window.scrollX;
const y = window.scrollY;

console.log(x,y);

// 지정한 위치에 스크롤 기능 사용
window.scrollTo(0, 1000);

// 페이지의 타이틀 정보 가져옴
const title = document.title;

document.title = '타이틀 내용';
// 페이지의 타이틀은 속성에 문자열을 대입하면 변경 가능,동적으로 변경 가능
// 채팅 앱에서 읽지 않은 메시지의 수 표시에 유용 
document.querySelector('#btnApple').addEventListener('click', () => {
  document.title = '사과';
});

document.querySelector('#btnOrange').addEventListener('click', () => {
  document.title = '오렌지';
});