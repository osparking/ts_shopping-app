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
      <Greeter person="주디"/>
      <Greeter person="구름이"/>
      <Greeter person="쿠키"/>
    </div>
  );
}

export default App;
