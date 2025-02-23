import css from './App.module.css';
import Sidebar from './components/Sidebar';
import StateGreeting from './components/StateGreeting';

function App() {
  return (
    <div className="App">
      <StateGreeting name="Becki" greeting="I'm a stateful class component" />
    </div>
  );
}

export default App;