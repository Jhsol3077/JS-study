document.addEventListener('DOMContentLoaded', () => {
  //DOMContentLoaded를 통해 문서의 모든 콘텐츠가 로딩된 이후에 JS 코드가 실행되도록 함 
  
  const submitButton = document.querySelector('#submitButton');
  
  submitButton.addEventListener('click', (event) => {
    // 전화번호 가져오기
    const phoneNumberInput = document.querySelector('#phoneNumberText');
    const phoneNumber = phoneNumberInput.value;

    // 전화번호에 '-'이 삽입된 경우 제거
    const trimmedPhoneNumber = phoneNumber.replace(/-/g, '');

    // 알림으로 전화번호 표시
    // ``을 이용하는 것을 문자 템플릿이라고 한다 
    
    alert(`전화번호는 ${trimmedPhoneNumber}입니다.`);

    // 버튼의 기본 작동을 해제
    event.preventDefault();
  });
});
