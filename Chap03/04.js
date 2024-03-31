const array1 = ['사과', '귤', '바나나'];
const shiftedValue = array1.shift(); // 첫 위치의 요소 삭제
console.log(shiftedValue); //결과: "사과" ~ 삭제된 요소
console.log(array1); //결과: ["귤", "바나나"];

const array2 = ['사과', '귤', '바나나'];
const poppedValue = array2.pop(); //마지막 위치의 요소 삭제
console.log(poppedValue); //결과: "바나나"
console.log(array2); //결과: ["사과", "귤"];

const array3 = [];
const poppedValue1 = array3.pop(); 
console.log(poppedValue1); //결과: 삭제 가능한 요소가 없으므로 반환값은 undefined

const array4 = ['사과', '귤'];
array4.splice(1, 0, '바나나'); // 인덱스 1의 위치에서 0개의 요소를 삭제하고, '바나나'를 추가함
console.log(array4); //결과: ["사과", "바나나", "귤"];

const array5=['사과', '귤'];
array5.splice(1, 1, '바나나', '딸기'); //인덱스 1의 위치에서 1개의 요소를 삭제하고, 괄호 안의 요소들을 추가
console.log.apply(array5); //결과:["사과", "바나나", "딸기"];

//concat()함수를 이용하면 여러 개의 배열을 하나의 배열로 결합할 수 있다
const array6 = ["곰", "사자"];
const array7 = ["여우"];
const array8 =  array6.concat(array7);
console.log(array8); //결과: ["곰", "사자", "여우"];

// ...연산자를 이용하여 [...배열]을 선언하면 요소의 데이터가 전부 표시된 배열을 가져올 수 있다
const array9 = ["곰", "사자"];
console.log([...array9]);

// join()은 배열의 요소를 결합해 문자열로 출력
const array10 = [2,4,10];
console.log(array10.join()); //결과 : "2, 4, 10"의 문자열 형태로 출력
