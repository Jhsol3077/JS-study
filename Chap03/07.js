// reverse()는 요소를 역순으로 정렬한다.
const array = [1, 3, 5];
array.reverse();
console.log(array);  //결과: [5, 3, 1]

const array1 = [1, 2, 3, 3, 4, 5];

array1.sort((a,b) => {
  // a가 b보다 작으면 a,b의 순서로 정렬
  if (a < b) {
    return 1;
  }

  if ( a === b) {
    return 0;
  }

  if ( a > b) {
    return -1;
  }
});