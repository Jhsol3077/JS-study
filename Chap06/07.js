const btn = document.querySelector('#btn');
btn.addEventListener('click', (event) => {
  //전체 화면 전환
  myRequestFullScreen(document.body);
});

function myRequestFullScreen(element) {
  if (element.requestFullScreen) {
    //표준 사양
    element.requestFullScreen();
  } else if (element.webkitRequestFullScreen) { 
    //사파리, 크롬
    element.webkitRequestFullScreen();
  } else if (element.mozRequestFullScreen){
    //파이어폭스
    element.mozRequestFullScreen();
  } else if (element.msRequestFullScreen) {}
    //인터넷 익스플로러 11+
    element.msRequestFullScreen();
}

