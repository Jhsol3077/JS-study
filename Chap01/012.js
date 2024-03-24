//함수를 간략히 기술하기 위해 화살표 함수를 이용
const calcSum = (a,b,c) => {
  const result = a+b+c;
  return result;
};

//파라미터가 하나인 경우는 ()의 생략이 가능, 파라미터가 없거나 2개 이상이라면 생략 불가
const myFunction1= (a) => {
  return a+2;
};

const myFunction2=a => {
  return a+2;
};


const myFunction3 = (a) => a+2;
//화살표 함수의 정의가 한 줄인 경우 {}와 return을 모두 생략 가능하다

function calcFunction(price, tax=0.08) {
  const result = price + price*tax;
  return result;
};

//tax의 인수를 생략한다면 초깃값인 0.08이 이용됨
const result1=calcFunction(100);
console.log(result1); //결과: 108(100+100*0.08);

const result2=calcFunction(100., 0.1);
console.log(result2); //결과:110, tax의 전달 값을 지정하면 해당 값이 사용

