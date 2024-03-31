// map()은 배열에서 요소를 추출하여 새로운 배열을 생성, 또한 배열 요소를 하나씩 처리하기 때문에 배열의 루프 처리 작업에도 활용
// map의 각 요소는 인수로 전달된 콜백 함수에 의해 처리. map()은 forEach()와 비슷하지만 반환값이 존재

const idList = [4, 10, 20];

const userIdList = idList.map((value) => `.userid_${value}`);
console.log(userIdList); //결과: ["userid_4", "userid_10", "userid_20"]

const idList1 = [3, 8, 12];

const userIdList1 = idList.map((value, index) => `userid_${index + 1}_${value}`);
console.log(userIdList); //결과: ["userid_1_3", "userid_2_8", "userid_3_12"]

const apiResponseData = [
  {id: 10, name: '곰'},
  {id: 21, name: '사자'},
  {id: 31, name: '여우'}
];

const idList2 = apiResponseData.map((value) => value.id);
//다음과 같이 작성도 가능
//const idList2 = apiResponseData.map(value => { return value.id});

console.log(idList2); //결과: [10, 21, 31]