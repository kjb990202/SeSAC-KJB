import { useState } from 'react';
import './App.css';
import UseCallbackEx from './components/UseCallbackEx';
import UseCallbackEx2 from './components/UseCallbackEx2';
import UseMemoEx from './components/UseMemoEx';
import UseReducer from './components/UseReducer';
import CustomHookEx from './components/CustomHookEx';

function App() {
  const [postId, setPostId] = useState(1);
  return (
    <>
      <UseMemoEx />
      <hr />
      <UseCallbackEx />
      <hr />
      <UseCallbackEx2 postId={1} />
      <button onClick={() => setPostId(postId + 1)}>+1</button>
      <hr />
      <UseReducer />
      <hr />
      <CustomHookEx />
    </>
  );
}

export default App;
