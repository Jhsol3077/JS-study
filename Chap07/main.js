document.querySelector('.box').addEventListener('mouseenter', () => {
  console.log('포인팅 디바이스가 .box 요소 위에 있음');
});

document.querySelector('.box').addEventListener('mouseleave', () => {
  console.log('포인팅 디바이스가 .box 요소를 벗어남');
});
