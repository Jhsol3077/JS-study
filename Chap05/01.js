const date =  new Date();
const year = date.getFullYear(); //연도
const month = date.getMonth() + 1; //월
const day = date.getDate();
const label = `${month}월${day}일` //날짜 표시

//HTML에 표시
document.querySelector('#log').innerHTML = `지금은 ${year}년입니다.`;
document.querySelector('#log').innerHTML = `오늘은 ${label}입니다.`;