// promise 기본 예시
function promise1(flag) {
    return new Promise(function(resolve, reject) {
        if(flag) {
            resolve(`상대 fulfilled ! then으로 연결`);
        } else {
            reject(`상태 rejected ! catch으로 연결`);
        }
    });
}

// 특정 함수가 return하는 값이. promise 객체일 경우,
// chaining으로 then, catch라는 메소드

promise1(true).then((result) =>{
    // result 에는 resolve로 보낸 인자 값이 들어오게 된다.
    // 여기서는 `상태 fulfilled ! then으로 연결` 문자열
    console.log(result);
});
