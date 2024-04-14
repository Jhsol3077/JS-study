/** scroll 이벤트는 대상 요소의 스크롤 작업 실행 시 발생, 스크롤 분량에 따라 처리를 구분하고 싶을 때 유용 */

//스크롤 시 문구와 함께 좌표가 출력
window.addEventListener('scroll', () => {
  console.log('스크로로 작업', window.scrollX, window.scrollY);
});