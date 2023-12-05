import './App.css';
import StateClass from './component/StateClass';
import StateFunc from './component/StateFunc';
import EventClass from './component/EventClass';
import EventFunc from './component/EventFunc';
import PracticeClass from './component/PracticeClass';
import PracEvent from './component/PracEvent';

function App() {
  return (
    <div>
      <StateClass name="lily" />

      <StateFunc />

      <EventClass />

      <EventFunc />

      <PracticeClass />
      <br />
      <PracEvent />
    </div>
  );
}

export default App;
