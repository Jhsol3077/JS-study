const object = {}; //빈 객체

//개인의 정보 데이터 객체
const person = {
  id: 1,
  name: '거북이',
  age: 28
};

console.log(person.id);
console.log(person['name']);

//값의 변경 가능
person.id = 2;
person['name'] = '사자';
console.log(person.id); //바뀐 값인 2가 출력
console.log(person['name']); //바뀐 값인 사자 출력

const object1 = {};
object2.foo;  //undefined 출력

