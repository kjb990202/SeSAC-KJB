const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';
const IN = 'counter/IN';
const OUT = 'counter/DE';

// 발생할 수 있는 action을 return 하는 함수.
// 왜 만들었나요? 액션 type의 이름이 바뀐다라고 가정하면, 액션을 발생시키는 모든 곳(dispatch)에서
// action.type을 다 변경해줘야 함. 이를 해결하기 위해 만들었어요.
export const increase = () => ({ type: INCREMENT });
export const decrease = () => ({ type: DECREMENT });
export const inM = () => ({ type: IN });
export const outM = () => ({ type: OUT });

const initialValue = { number: 0 };

const counterReducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'INCREMENT': // INCREMENT 상수 선언 전 ver.3
    case INCREMENT: // INCREMENT 상수 선언 후 ver.3-1
      return { number: state.number + 1 };
    case 'DECREMENT':
    case DECREMENT:
      return { number: state.number - 1 };
    case 'IN':
      return { money: state.money + inM };
    case 'OUT':
      return { money: state.money - outM };
    default:
      return state;
  }
};

export default counterReducer;
