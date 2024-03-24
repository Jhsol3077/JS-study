const a = 10;
const b = 20;

console.log(a < b); //결과값은 true
console.log(a > b); //결과값은 false

const isIOs = navigator.userAgent.includes('iPhone');
//iOS 여부를 확인하는 것

if (isIOs) {
  //iOS용 처리 작업 코드
}

const userName = '제이펍';
if (userName) {
  alert('안녕하세요. ${userName}');
} //'안녕하세요.제이펍' 알림창 표시

//address가 ''이므로 알림창을 표시하지 않음
const address = '';
if(address) {
  alert('당신은 ${adddress}에 살고 계시네요.');
}

const flg = 'JavaScript'.includes('a'); //JavaScript 문자열의 'a'문자 포함 여부
console.log(!flg);  //결과는 false. 진릿값에 !을 붙이면 반대의 값을 가진다

