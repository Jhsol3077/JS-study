 // id 키와 name 키를 가지는 유저 데이터 배열
 const userDataList = [
  {id: 123, name: '곰'},
  {id: 1021, name: '사자'},
  {id: 6021, name: '여우'}
 ];

 //검색 ID 입력창
 const searchIdInput = document.querySelector('#search-id-input');

 //검색 결과 표시창
 const searchResult = document.querySelector('#search-result');

 //문자가 입력될 때마다 내용 체크
 searchIdInput.addEventListener('keyup', () => {
  const searchId = Number(event.target.value);
  findUser(searchId);
 });

 //유저 검색
 function findUser(searchId) {
  //해당 데이터 가져오기
  const targetData = userDataList.find((data) => data.id === searchId);

  if  (targetData == null) {
    searchResult.textContent = '유저 검색 결과 없음';
    return;
  }

  searchResult.textContent = targetData.name;
  
 }