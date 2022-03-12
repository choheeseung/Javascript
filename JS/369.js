// 반복문을 이용하여 3, 6, 9 게임을 만들어주세요!
for (var number = 1; number <= 30; number++){
    if (number.toString().includes('3') || number.toString().includes('6') || number.toString().includes('9')){
        console.log("짝!");
    }
    else {
        console.log(number);
    }
}