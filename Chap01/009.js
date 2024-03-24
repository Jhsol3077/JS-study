console.log('사과' == '사과'); //값이 같으므로 true 반환
console.log(10<30); // ture
console.log(20 <= 30); //false

const array1=[1,2,3];
const array2=[1,2,3];
console.log(array1 == array2); // false. 참조하는 곳이 다르므로 참이 반환되지 않는다

const array3=[1,2,3];
const array4=array3;
console.log(array3 == array4); // true. 참조하는 곳이 같으므로 true 반환
