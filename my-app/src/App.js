import "./App.module.css";
import ConditionalRenderingClass from "./components/ConditionalRenderingClass";
import ConditionalRenderingFunctional from "./components/ConditionalRenderingFunctional";

function App() {
  return (
    <div className="App">
      <ConditionalRenderingFunctional connected={true} />
      <ConditionalRenderingClass />
    </div>
  );
}

export default App;
