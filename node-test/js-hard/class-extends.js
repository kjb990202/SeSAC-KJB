// class House {

//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }

//     age() {
//         console.log(`${new Date().getFullYear() - this.year}년에 건축되었어요`);
//     }
// }

// const home = new House("새싹", "2022");
// home.age();

// class Apartment extends House {
//     constructor(name, year,floor) {
//         // 부모(House)의 생성자 호출
//         super(name, year);
//         this.floor = floor;
//     }


// // 오버라이딩 : 부모에 있는 메소드를 그대로 자식이 다시 정의하는 것
// age() {
//     super.age();
//     console.log(`입주는 ${ this.year + 1}부터 시작했습니다.`);

// }

// }

// // function test(a, b) {
// //     console.log(`a:${a}, b: ${b}`);
// // }

// // function test(a, b = 0, c = 0) {
// //     console.log(`a:${a}, b: ${b} c: ${c}`);
// //     return a + b + c;
// // }

// // // 오버로딩 : 똑같은 이름으로 여러 개의 함수를 선언하는 것


// // (매개변수가 다르다).

// const apart = new Apartment("래미안 아파트", 2013, 25);
// console.log(apart.name, apart.floor);
// apart.age();


// class Personal {

// }

// class Personal {

// }

// class Student {
//     constructor() {
//       // 이름
//       // 나이
//       // 주민번호
//       // 학번
//     }

//     // 밥을 먹는다
//     // 잠을 잔다.
// }

// const p = new Personal();

class Shape{
    constructor(width,length) {
        this.width = width;
        this.length = length;
    }

    getArea() {
        console.log(this.width*this.length);
    }
}

let rec1 = new Shape(3,4);
console.log(rec1.getArea());
