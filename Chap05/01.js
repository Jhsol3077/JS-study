const date =  new Date();
const year = date.getFullYear(); //연도
const month = date.getMonth() + 1; //월
const day = date.getDate();
const label = `${month}월${day}일` //날짜 표시
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const label1 = `${hour}시${minutes}분${seconds}초`;

//HTML에 표시
document.querySelector('#log').innerHTML = `지금은 ${year}년입니다.`;
document.querySelector('#log').innerHTML = `오늘은 ${label}입니다.`;
document.querySelector('#log').innerHTML = `지금은 ${label1}입니다.`;