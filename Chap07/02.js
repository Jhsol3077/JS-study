//이벤트타깃.removeEventListener()를 사용해 이벤트 리스너 삭제가 가능

const box = document.querySelector('.box');
box.addEventListener('click', onClickButton);

// 3초 후 리스너의 함수를 삭제
setTimeout(() => {
  box.removeEventListener('click', onClickButton);  //removeEventListener()는 화살표 함수 사용 불가
}, 3000);

function onClickButton() {
  alert('box 클릭 이벤트가 실행되었습니다.')
}
