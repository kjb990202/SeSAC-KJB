import './App.css';
import ClassComponent from './components/ClassComponent';
import FuncComponent from './components/FuncComponent';
import FuncPropsEx from './components/FuncPropsEx';
import Section from './components/Section';

function App() {
  return (
    <div>
      {/* <FuncComponent /> */}
      {/* <FuncComponent></FuncComponent> */}
      {/* <ClassComponent /> */}
      <FuncPropsEx title="SeSAC" content="hello world" number={5} />
      {/* <FuncPropsEx number={5} /> */}

      {/* <Section title="SeSAC 영역">
        <div>SeSAC 영역의 content입니다.</div>
      </Section>
      <Section title="코딩온 영역">
        <h5>코딩온 영역의 content입니다.</h5>
      </Section> */}
    </div>
  );
}

export default App;
