function myFunction(a){  //functuin 함수명(파라미터) {처리내용}
  const result = a+2;
  return result;
}

function calcSum(a,b,c) { //파라미터의 개수에는 제한이 없으며, ,로 구분하여 전달
  const result = a + b + c;
  return result;
}

function aFunction() { //파라미터가 없는 함수도 가능
  console.log('안녕하세요!');
  return 100; //함수에서 반환되는 결과를 반환값이라고 하며 return으로 처리, 생략 가능
}

function bFunction(){
  return 100;

  console.log('안녕하세요!'); //return 구문으로 함수가 종료되기 때문에 return 아랫부분은 코드를 입력해도 실행되지 않음
}

function cFunction(a,b) {
  if(a >= 100) { //a가 100이상이라면 a를 반환
    return a;
  }
//a가 100미만이라면 b를 반환
  return b;
}

