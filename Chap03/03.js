const array = ['딸기', '귤', '사과'];

//배열의 각 요소별 루프 처리
for (const value of array) {
  console.log(value); //결과: '딸기', '귤', '사과'가 순서대로 출력
}

//배열의 길이 가져오기
const arrayLength = array.length;

//배열의 요소 데이터 처리
for (let i=0; i<arrayLength; i++) {
  //인덱스 i의 요소 출력
  console.log(array[i]); // '딸기', '귤', '사과' 순서대로 출력
}

const array1 = ['사과', '귤'];
array1.unshift('바나나'); //'바나나'를 배열 첫 위치에 추가
console.log(array1); //결과: ['바나나', '사과', '귤'];

const array2 = ['사과', '귤'];
array2.push('바나나', '딸기'); // 이 요소들을 배열의 마지막에 추가
console.log(array2); //결과: ["사과", "귤", "바나나", "띨기"];