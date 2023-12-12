import { useReducer, useState, useCallback } from 'react';

const initialValue = { value: 0 };
const reducer = (prevState, action) => {
  switch (action.type) {
    case 'PLUS':
      return { value: prevState.value + 1 };
    case 'MINUS':
      return { value: prevState.value - 1 };
    case 'RESET':
      return initialValue;
    case 'MULTIFLY':
      return { value: prevState.value * action.number };
    case 'DIVIDE':
      return { value: prevState.value / action.numbers };
    default:
      return { value: prevState.value };
  }
};

// state : 상태
// dispatch : 액션을 발생시키는 함수
// reducer : 상태를 업데이트 하는 함수 (결국 dispatch가 실행시키는 함수)

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const [number, setNumber] = useState(0);
  const [numbers, setNumbers] = useState(0);

  const handleChangeNumber = useCallback((e) => setNumber(e.target.value), []);
  const handleChangeNumbers = useCallback(
    (e) => setNumbers(e.target.value),
    []
  );

  const plus = () => dispatch({ type: 'PLUS' });
  const minus = () => dispatch({ type: 'MINUS' });
  const reset = () => dispatch({ type: 'RESET' });
  const multifly = () => dispatch({ type: 'MULTIFLY', number: number });
  const divide = () => dispatch({ type: 'DIVIDE', numbers: numbers });
  // 지금은 +,-,초기화만 하고 있지만
  // 만약에 곱하기, 나누기 등등 더 많은 연산을 이용한다고 하면?
  // 또 컴포넌트 자체가 복잡해져사 코드가 길어진다
  // state의 변화를 추적하고 싶음 => setState를 일일이 찾아가면서 +1도 되구나,,, -1도 되구나,,, 알게 됨.
  // reducer를 사용한다면? => reducer함수만 읽으면, +1 할 수 있고, -1 할 수 있고,
  //   const [state, setState] = useState({ value: 0 });
  //   const plus = () => {
  //     setState({ value: state + 1 });
  //   };
  //   const minus = () => {
  //     setState({ value: state + 1 });
  //   };
  //   const reset = () => {
  //     setState({ value: state + 1 });
  //   };

  return (
    <>
      <h3>useReducer 공부</h3>
      <div>
        {state.value}
        <button onClick={plus}>+1</button>
        <button onClick={minus}>-1</button>
        <button onClick={reset}>reset</button>
        <br />
        <input type="number" value={number} onChange={handleChangeNumber} />
        <button onClick={multifly}>곱하기</button>
        <input type="number" value={numbers} onChange={handleChangeNumbers} />
        <button onClick={divide}>나누기</button>
      </div>
    </>
  );
}
