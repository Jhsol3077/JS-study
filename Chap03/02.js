const array = ['딸기', '귤', '사과'];

array.forEach((value, index) => { 
  //인덱스와 값을 순서대로 출력
  console.log(index, value); //결과: 0'딸기', 1'귤', 2'사과' 순서로 출력
}); 

[1,2,3,4,5,6,7,8]
//짝수의 배열을 생성
.filter((value) => value % 2 === 0 )
//배열의 짝수 값을 처리
.forEach((value) => {
  console.log(value);
}); //결과: 2,4,6,8이 출력
