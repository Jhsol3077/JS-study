let a;
let b;
let c;
[a,b,c] = [1,2,3];
console.log(a,b,c); //결과: 1, 2, 3

const array = ['곰', '여우'];
[array[0], array[1]] = [array[1], array[0]];
console.log(array); //결과: ["여우", "곰"].. 배열 내 요소의 순서가 변함

const array1 = [1,2,3,4,5];

const arrayLength = array1.length;

//피셔 예이츠 알고리즘. 배열을 빠르면서도 고르게 섞기 위해서 사용되는 알고리즘
for (let i = arrayLength -1; i >=0; i--) {
  const randomIndex = Math.floor(Math.random() * (i+1));
  [array1[i], array1[randomIndex]] = [array1[randomIndex], array[i]];
}

console.log(array1); //결과: [4,5,1,2,3]

