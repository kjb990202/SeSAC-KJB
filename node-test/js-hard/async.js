// ----------------- 문제 발생 코드!!! ---------------------
// function goMart() {
//   console.log("마트에 가서 어떤 음료를 살지 고민한다.");
// }

// let product;
// let price;

// function pickDrink() {
//   setTimeout(function () {
//     console.log("고민 끝!!");
//     product = "제로 콜라";
//     price = 2000;
//   }, 3000);
// }

// function pay(product, price) {
//   console.log(`상품명: ${product}, 가격: ${price}`);
// }

// goMart();
// pickDrink();
// pay(product, price);

// ----------------- callback 함수로 해결한 코드 ---------------------
// function goMart() {
//   console.log("마트에 가서 어떤 음료를 살지 고민한다.");
// }

// let product;
// let price;

// function pickDrink(callback) {
//   setTimeout(function () {
//     console.log("고민 끝!!");
//     product = "제로 콜라";
//     price = 2000;
//     callback(product, price);
//     // pay(product, price);
//   }, 3000);
// }

// function pay(product, price) {
//   console.log(`상품명: ${product}, 가격: ${price}`);
// }

// goMart();
// pickDrink(pay);
// // pay(product, price);

// ----------------- Promise 로 해결한 코드 ---------------------
// function goMart() {
//   console.log("마트에 가서 어떤 음료를 살지 고민한다.");
// }

// let product;
// let price;

// function pickDrink() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log("고민 끝!!");
//       product = "제로 콜라";
//       price = 2000;
//       resolve();
//     }, 3000);
//   });
// }

// function pay(product, price) {
//   console.log(`상품명: ${product}, 가격: ${price}`);
// }

// goMart();
// pickDrink().then(() => {
//   pay(product, price);
// });
// pay(product, price);

// ---------------------- async / await ---------------------
function goMart() {
    console.log("마트에 가서 어떤 음료를 살지 고민한다.");
  }
  
  let product;
  let price;
  
  function pickDrink() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log("고민 끝!!");
        product = "제로 콜라";
        price = 2000;
        resolve();
      }, 3000);
    });
  }
  
  function pay(product, price) {
    console.log(`상품명: ${product}, 가격: ${price}`);
  }
  
  // goMart();
  // pickDrink().then(() => {
  //   pay(product, price);
  // });
  
  async function exec() {
    goMart();
    await pickDrink();
    pay(product, price);
  }
  
  exec();