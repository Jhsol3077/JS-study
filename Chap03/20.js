/** API response의 데이터를 확인하고 싶을 때
 * Object.keys(객체): 객체 각 키의 배열
 * Object.values(객체): 객체 각 데이터의 배열
 * Object.entries(객체): 객체 각 속성(Key, Value)의 배열
 */

const userData = {
  id: 1,
  name: '사자',
  age: 26
};

console.log(Object.keys(userData)); //결과: ['id', 'name', 'age]
console.log(Object.values(userData)); //결과: [1, '사자', 26]
console.log(Object.entries(userData)); //결과: [['id', 1], ['name', '사자'], ['age', 26]]

const userData1 = {
  id: 1,
  name: '사자',
  age: 26
};

const { id, name, age } = userData1;

console.log(id); // 결과로 userData.id값 출력
console.log(name);
console.log(age);
