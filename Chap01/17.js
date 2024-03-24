for (let index=0; index<10; index++) {
  console.log(index);
}
//0부터 9까지 차례대로 출력되는 반복문

let myNumber = 0;
while (myNumber < 10) {
  console.log(myNumber);
  myNumber +=1;
}
//myNumber 변수의 값이 10이상이 될 때까지 +1을 반복 실행하는 코드

for(let index=0; index <10; index++) {
  if(index % 2 ===0 ) {
    //index가 짝수인 경우 아랫부분은 실행되지 않고 루프가 넘어감
    continue;
  }


//홀수만 출력됨
console.log(index);
}

console.log('루프가 종료됨');
//출력 결과는 1,3,5,7,9,루프가 종료됨의 순서

function myFunction(flgA) {
  for(let index=0; index < 10; index++) {
    if(flgA === true) {
      if(index % 2 !== 0) {
        console.log(index);
      }
    }
  }
 }
 //flgA가 참이자 for문의 index가 홀수일 때만 실행되는 코드
 