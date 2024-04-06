//location.hash 속성으로 앵커(Anchor) 기능을 사용할 수 있다. 앵커는 페이지 내부의 링크 기능을 하며, 읽기와 쓰기 모두 가능
const hash = location.hash;
console.log(hash);  

location.hash = 'app';

//해시 변경 이벤트 감시
window.addEventListener('hashchange', handleHashChange);
handleHashChange();

function handleHashChange() {
  //변경 후의 해시값
  const hash = location.hash;
  document.querySelector('.log').innerHTML = `현재 앵커는 ${hash}입니다.`;
}

const win = window.open('another.html');
win.focus();

const x = window.scrollX;
