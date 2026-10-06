import "./App.css";
import Greeter from "./components/Greeter";

function f1<T>(arg: T): T {
  return arg;
}

const f2 = <T,>(arg: T): T => {
  return arg;
};

function App() {
  return (
    <div className="App">
      <Greeter />
      <Greeter />
      <Greeter />
    </div>
  );
}

export default App;
