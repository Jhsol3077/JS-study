const btnExit = document.querySelector('#btnExit');
btnExit.addEventListener('click', (event) => {
  //전체 화면 해제
  myCancelFullScreen();
});

function myCancelFullScreen() {
  if (document.exitFullscreen) {
    //표준 사양
    document.exitFullscreen();
  } else if (document.webkitCanceFullScreen) {
    //사파리, 크롬
    document.webkitCanceFullScreen();
  } else if (document.mozCancelFullScreen) {
    //파이어폭스
    document.mozCancelFullScreen();
  } else if (document.msExitFullScreen) {
    //인터넷 익스플로러 11+
    document.msExitFullScreen();
  }
}