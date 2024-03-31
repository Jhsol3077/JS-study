// 비교 함수 없이 정렬
const arr1 = ['grape', 'Orange', 'apple'];
arr1.sort();
console.log(arr1); //결과: ['Orange', 'apple', 'grape]. 문자 코드를 사용한 정렬은 대문자로 시작하는 것이 앞으로 온다

//비교 함수에 localCompare를 사용
const arr2 = ['grape', 'Orange', 'apple'];
arr2.sort((a,b) => a.localeCompare(b));
console.log(arr2); //결과: ['apple', 'grape', 'Orange']