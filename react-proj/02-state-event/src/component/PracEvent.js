import { useState } from 'react';

function PracEvent() {
  const [font, setFont] = useState('검정색 글씨');
  const [color, setColor] = useState('black');

  const handleOnClickRed = () => {
    setFont('빨간색 글씨');
    setColor('red');
  };

  const handleOnClickBlue = () => {
    setFont('파랑색 글씨');
    setColor('blue');
  };

  return (
    <>
      <div style={{ color: setColor }}>{font}</div>
      <div>
        {font}
        <button onClick={handleOnClickRed}>빨간색</button>
        <button onClick={handleOnClickBlue}>파랑색</button>
      </div>
    </>
  );
}

export default PracEvent;
