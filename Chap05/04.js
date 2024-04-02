const date = new Date();
const day = date.getDay();
const dayList = ['일', '월', '화', '수', '목', '금', '토'];
const label = dayList[day];

//HTML에 표시
document.querySelector('#log').innerHTML = `오늘은 ${label}요일입니다.`;

const locale = date.toLocaleString(); 
const localeDate = date.toLocaleDateString();
const localeTime = date.toLocaleTimeString();

//HTML에 문자duf 넣기
document.querySelector('#log').innerHTML - `${locale}<br />
      ${localeDate}<br  />
      ${localeTime}`;

const num1 = Date.parse('2020/12/28');
console.log(num1);

const num = Date.now();
console.log(num);

