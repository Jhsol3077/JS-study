//디바이스 화소 비율 가져오기
const dpr = window.devicePixelRatio;
// 캔버스의 논리적 크기
const w = 200;
const h = 200;

// 캔버스 요소 사이즈 조정
const canvas = document.querySelector('canvas');
canvas.width = w * dpr;
canvas.height = h * dpr;
canvas.style.width = w + 'px'; //화면 표시 단위 설정
canvas.style.height = h + 'px';

const context = canvas.getContext('2d');
//스케일 설정
context.scale(dpr, dpr);
context.fillStyle = 'red';
context.arc(w / 2, h /2 , 100, 0, 2 * Math.PI);
context.fill();

//화면에 로그를 표시
document.querySelector('.log').innerHTML = ` 디바이스의 화소 비율은 &{dpr}입니다.`;

const isSupported = !! (
  'ontouchstart' in window || 
  (navigator.pointerEnabled && navigator.maxTouchPoints > 0 )
); 

// 읽기 작업
console.log(location.href); //결과 : 현재 페이지의 URL

location.href = 'another.html'; // 해당 페이지 이동

location.reload();

location.reload(true);

