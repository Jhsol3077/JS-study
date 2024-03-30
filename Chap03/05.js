// indexOf()는 배열 내에서 검색 데이터가 처음 발견되는 인덱스를 반환
// lastindexOf()는 배열 내에서 검색 데이터가 발견되는 마지막 인덱스를 반환

['사과', '바나나', '귤'].indexOf('바나나'); // 1
[0, 2, 4, 6, 4, 2, 0].indexOf(4); // 2
[0, 2, 4, 6, 4, 2, 0].lastIndexOf(4); //4

// includes()는 배열 내 요소의 포함 여부를 확인
['사과', '바나나', '귤'].includes('바나나'); // true
[0, 2, 4, 6, 8, 10].includes(3); // false

const myArray = ['곰', '사자', '여우', '원숭이' ];

// 배열에서 '사자'를 가져옴
const targetUser = myArray.find((element) => element === '사자');

// const targetUser = myArray.find(element => { return element === '사자'}); 와 같은 형태로도 나타낼 수 있음
console.log(targetUser); // 결과 : '사자'

