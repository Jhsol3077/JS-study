// filter()는 콜백 함수 조건에 만족하는 요소들을 새로운 배열로 생성
const newArray = [10, 20, 30, 40].filter((value) => value >= 30);

console.log(newArray); //결과: [30, 40]

const newArray1 = [10, 20, 30, 40].filter((value) => {
  return value >= 30;
});

const newArray2  = [10, 20, 30, 40].filter(function(value) {
  return value >= 30;
});