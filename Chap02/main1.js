let textarea = document.querySelector('.textarea');

let string_num = document.querySelector('.string_num');

textarea.addEventListener('keyup', onKeyUp); /**keyup 함수에 대해서 공부하기 */

function onKeyUp() {
  const inputText = textarea.value;
  string_num.innerText = inputText.length;
}