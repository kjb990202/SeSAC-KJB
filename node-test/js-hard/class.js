const cat1 = {
    name : '나비',
    age : 2,
    mew : function() {
        console.log("야옹");
    },
};

const cat2 = {
    name : '장화',
    age : 4,
    mew : function() {
        console.log("야옹");
    },
};

const cat3 = {
    name : '코코',
    age : 4,
    mew : function() {
        console.log("야옹");
    },
};

 

// PascalCase 규칙을 이용해서 식별자 생성
// camelCase에서 첫 글자도 대문자인 방식
class Cat {
    // 생성자 : 메소드의 일종.
    // (메소드 중에서) Cat 클래스를 이용해서 객체를 만드는 순간에 호출되는 메소드
    constructor(name2, age2) {
        this.name = name2;
        this.age = age2;
    }

    // 메소드
    mew () {
        console.log("야옹");
    }
}

const cat4 = new Cat("나비", 2)
cat4.mew();


