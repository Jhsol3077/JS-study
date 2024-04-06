// 이벤트 처리는 addEvenetListener()를 사용해 제어한다.
// 요소의 참조 정보 가져오기
const button = document.querySelector('.button');
button.addEventListener('click', onClickButton);

/**function onClickButton() {
  console.log('클릭 이벤트가 발생하였습니다.');
} */

button.addEventListener('click', () => {
  console.log('버튼 클릭 이벤트가 발생하였습니다.');
})

/**
 *function 사용 가능
 * button.addEventListener('click', function() {
  console.log('버튼 클릭 이벤트가 발생하였습니다.');
}); */


const option = {
  once: true //리스너 1회 실행 여부를 의미, 진릿값 타입
};

document.querySelector('.button').addEventListener('click', onClickButton, option);

function onClickButton() {
  alert('버튼 클릭 이벤트가 발생하였습니다.');
}