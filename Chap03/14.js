// 2차 배열을 1차 배열로 만드는 것을 플래트닝(Flattening)이라고 한다

const array = [['바나나', '사과', '딸기'], ['귤', '포도']];

const flattenedArray = array.reduce((previousValue, currentValue) => {
  return previousValue.concat(currentValue);
});

console.log(flattenedArray); //결과: ["바나나", "사과", "딸기", "귤", "포도"]