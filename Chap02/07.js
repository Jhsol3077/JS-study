const imageName = 'image.png';
imageName.replace('1.png', '2.png'); //image1.png를 image2.png로 바꿈

const inputText = '제이\n-펍';
inputText.replace('\n', ''); //제이-펍으로 출력

let phoneNumber = '010-1234-5678';
phoneNumber.replace('-', ''); //0101234-5678로서 첫 번째 인수가 문자열인 경우 검색 중 처음으로 발견되는 문자열만 변경, 첫번째 -만 변경한다

phoneNumber.replace(/-/g, ''); //g옵션을 넣으면 모든 문자열을 대체하게 할 수 있다, 01012345678으로 출력되는 결과 반환


