// const FuncComponent = () => {
//   return <div>함수형 컴포넌트입니다.</div>;
// };

function FuncComponent() {
  const text = 'hello?';
  const name = 'richard';
  const name1 = '낑깡';
  const animal = '강아지';
  const a = 3;
  const b = 2;
  const title = 'Hello World';

  const ifRenderTest = () => {
    if (name === 'lily') {
      return '안녕하세요!';
    } else if (name === 'richard') {
      return '안녕하세요...';
    } else {
      return '누구세요?';
    }
  };

  const style = { fontSize: '20px', color: 'red' };

  return (
    <>
      {/* 1. 하나의 태그로 감싸서 return */}
      <div>함수형 컴포넌트입니다.1</div>
      <div>함수형 컴포넌트입니다.2</div>
      {/* 2. js 문법 사용 가능 (변수) */}
      <h3>코딩온 {text}</h3>
      {/* 2. js 문법 사용 가능 (삼항 연산자를 조건에 따른 렌더링 (간단)) */}
      <h4>{name === 'lily' ? '안녕하세요!' : '누구세요?'}</h4>
      {/* 2-1. 복잡한 조건을 이용하고 싶다면? -> 위에서 함수로 만들어 사용*/}
      <h4>{ifRenderTest()}</h4>
      {/* 2-2. 조건에 따른 렌더링 ( && ) */}
      <h5>{name === 'richard' && '안녕하세요!'}</h5>
      {/* 3. inline style 적용 방법 > style 속성값으로 객체 전달*/}
      {/* <div style="font-size: 20px; color: red"></div> */}
      <div style={{ fontSize: '20px', color: 'red' }}>hello</div>
      <div style={style}>hello</div>
      {/* 4. class와 oncilck을 jsx에서 사용하기 */}
      {/* <div class="" onclick="함수();">원래 html에서 하던 방식</div> */}
      <div className="test-css">jsx에서 css 사용하기 (className)</div>
      {/* html에서는 함수를 "호출", jsx에는 함수를 "선언" */}
      <button
        onClick={() => {
          // 함수();
          console.log('hello');
        }}
      >
        버튼
      </button>
      {/* 5. 종료 태그 필수! */}
      <br />
      {/* /경로가 public 폴더 안이다 */}
      <img src="/logo192.png" />
      {/* src 내부의 이미지 사용할 경우 -> 위에서 이미지를 import 해오기 */}
      <img src={image} />
      {/* jsx 실습1 */}
      <h2>
        제 반려동물 이름은 {name1}입니다.
        <br />
        {name1}은 {animal}입니다.
      </h2>
      {/* jsx 실습2 */}
      <h2>{3 + 5 == 8 ? '정답입니다!' : '오답입니다!'}</h2>

      {/* jsx 실습3 */}
      <div>{a > b && 'a가 b보다 큽니다.'}</div>
      <br />

      {/* jsx 실습4 */}
      <div className="HW-color">{title}</div>
      <div>
        아이디:
        <input />
      </div>
      <br />
      <div>
        비밀번호:
        <input />
      </div>
    </>
  );
}

export default FuncComponent;
