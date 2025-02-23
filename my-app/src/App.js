import css from './App.module.css';
import NavBarSimple from './components/NavBarSimple';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className={css.App}>
      <NavBarSimple name="Becki" />
      <Sidebar />
    </div>
  );
}

export default App;