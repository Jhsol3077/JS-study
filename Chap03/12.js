//3개의 값을 가지는 배열
const priceList = [100, 500, 900];

//합계를 저장하는 변수
//reduce()는 요소를 좌에서 우로 처리하여 하나의 값을 생성
const sum = priceList.reduce((previous, current) => {
  return previous + current;
})

//다음과 같이 생략 가능
//priceList.reduce((previous, current) => previous + current);

console.log(sum); //결과: 1500
