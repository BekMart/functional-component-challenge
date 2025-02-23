import css from './App.module.css';
import Sidebar from './components/Sidebar';
import StateGreetingWithPrevState from './components/StateGreetingWithPrevState';

function App() {
  return (
    <div className="App">
      <StateGreetingWithPrevState name="Becki" greeting="I'm a stateful class component" />
    </div>
  );
}

export default App;