const priceList = [100, 500, 900];

let sum = 0;

// 루프 처리를 사용한 계산
for (const price of priceList) {
  sum += price;
}

console.log(sum); //결과:1500