let num = 5;

if (num < 0) {
  console.log("음수입니다.");
} else if (num == 0) {
  console.log("0입니다.");
} else if (num < 10) {
  console.log("한 자리 양수입니다.");
} else {
  console.log("두 자리 이상의 양수입니다.");
}


let fruit = 'apple';

switch (fruit) {
  case 'banana':
    console.log('This is a banana.');
    break;
  case 'apple':
    console.log('This is an apple.');
    break;
  case 'orange':
    console.log('This is an orange.');
    break;
  default:
    console.log('I do not know what fruit this is.');
}
