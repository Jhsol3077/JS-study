// 자바스크립트에서 DOM요소의 조작 가능 시점은 HTML문서의 로딩 완료 시점

// DOM 액세스 타이밍에 처리 실행
window.addEventListener('DOMContentLoaded', () => {
  // .box 요소 개수 가져오기
  const boxNum = document.querySelectorAll('.box').length;
  // 로그 출력
  console.log(`.box 요소의 개수는 ${boxNum}입니다.`);
});