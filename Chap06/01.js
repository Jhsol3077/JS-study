const btn = document.querySelector('button');

btn.addEventListener('click', (event) => {
  // 알림창 표시
  alert('안녕하세요! \n좋은 하루 보내세요.');

  const isYes = confirm('날씨가 화창한가요?');
  //유저가 입력한 결과를 화면에 표시
  document.querySelector('.log').innerHTML = isYes;
});

const text = prompt('오늘의 날씨는 어떤가요?', '여기 입력해 주세요');
console.log(text);
