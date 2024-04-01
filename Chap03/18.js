// API의 response 데이터를 다루는 객체
const response = {
  result: true,
  list: [{id: 1, name: '호랑이', age: 26},
         {id: 2, name: '거북이', age: 32}]
};

console.log(response.list[0].name); //결과: 호랑이

//값의 변경
response.list[1].age = 51;
console.log(response.list[1].age); //결과: 51

//클래스 데이터 객체
const myClass = {
  method1: function() {
    console.log('메소드실행');
  },
  method2: function() {
    console.log('메소드실행2');
  }
};

myClass. method2(); //"메소드실행2"출력