//div 요소를 전부 불러오기
const allDivElementList = document.querySelector('div');

//div 요소의 수를 출력
console.log(allDivElementList.length);

//세 번째 div 요소 출력(인덱스가 부여된 요소)
console.log(allDivElementList[2]);

// <div class = "on"></div> 요소를 찾기 위해 filter()를 사용하면
// NodeList에서는 filter()를 사용할 수 없으므로 에러 발생
allDivElementList.filter((element) => element.classList.contains('on'));

const allDivElementList1 = document.querySelectorAll('div');

//배열로 변환
const elementsArray = [...allDivElementList];

//배열용 메소드인 filter() 사용 가능
elementsArray.filter((element) => element.classList.contains('on'));

const myString = '안녕하세요';

console.log(myString.length); //결과: 5
console.log(myString[2]); //결과: "하"
console.log([...myString]); //결과: ["안", "녕", "하", "세", "요"]
console.log(Array.from(myString)); //결과: 배열로 뱐환

//콜백 함수로 새로운 배열 생성 가능
//문자열마다 '!'를 추가
const newArray = Array.from(myString, (character) => `${character}!`);
console.log(newArray); //결과: ["안!", "녕!", "하!", "세!", "요!"]

//스프레드 연산자(...)도 map()을 사용할 수 있다
const newArray1 = [...myString].map((character) => `${character}!` );
console.log(newArray1);