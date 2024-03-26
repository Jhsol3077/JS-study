const familyNameText = document.querySelector('#familyNameText');

const firstNameText = document.querySelector('#fistNameText');

const fullName = document.querySelector('#fullName');

firstNameText.addEventListener('keyup', onkeyup);
familyNameText.addEventListener('keyup', onkeyup);

function onkeyup() {
  const familyName = familyNameText.value;

  const firstName = firstNameText.value;

  fullName.innerHTML = familyName + ' ' + firstName;

  //다음과 같이 사용할 수도 있음
  //fullName.innerHTML = `${familyName}${firstName}`;
}