import { useSelector, useDispatch } from 'react-redux';
import { Box1, Box2, Box4 } from '../components/Boxes';
import { increase, decrease, inM, outM } from '../store/counterReducer';

export function Box1Container() {
  const number = useSelector((state) => state.counter.number);
  return <Box1 number={number} />;
}

export function Box2Container() {
  const number = useSelector((state) => state.counter.number);
  return <Box2 number={number} />;
}

export function Box4Container() {
  const number = useSelector((state) => state.counter.number);
  const isData = useSelector((state) => state.isData);
  const dispatch = useDispatch();
  const counterIncrease = () => dispatch(increase());
  const counterDecrease = () => dispatch(decrease());
  const isDataChange = () => dispatch({ type: 'CHANGE' });
  const inM = () => dispatch(inM());
  const outM = () => dispatch(outM());

  return (
    <Box4
      number={number}
      isData={isData}
      counterIncrease={counterIncrease}
      counterDecrease={counterDecrease}
      isDataChange={isDataChange}
      inM={inM}
      outM={outM}
    />
  );
}
