const object1 = {
  result: true,
  members: [
    { id:1 , name: '여우'},
    { id:2, name: '호랑이'},
    { id:3, name: '사자'}
  ]
};

//객체를 복사
const copiedObject1 = Object.assign({}, object1);

console.log(copiedObject1);//객체가 복사됨

const object2 = {
  id: 1, 
  members: ['사자', '토끼', '거북이']
};

//객체의 복사
const copiedObject2 = {...object2};

//복사 전 객체 members 속성의 배열을 수정
object2.members[0] = 'John';

console.log(copiedObject2.members[0]); //결과 : 'John'

/** API response의 특정 데이터를 확인하고 싶을 때
 * 지정한 데이터가 객체에 존재하지 않아서 처리 작업을 취소하고 싶을 때
 * 객체.hasOwnProperty(키): 데이터의 유무 확인, 진릿값 반환
 * 키 in 객체: 데이터의 유무 여부 반환
 */

const userData = {
  id: 1,
  name: '사자',
  age: 26
};

console.log(userData.hasOwnProperty('id')); //결과: true
console.log(userData.hasOwnProperty('address')); //결과: false
console.log('id' in userData); //결과: true
console.log(userData.id != null); //결과: true
console.log(userData.address != null); //결과: false
console.log(userData['id'] != null); //결과:true