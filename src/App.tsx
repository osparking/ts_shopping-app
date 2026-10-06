import "./App.css";
import logo from "./logo.svg";

function f1<T>(arg: T): T {
  return arg;
}

const f2 = <T,>(arg: T): T => {
  return arg;
};

function App() {
  return (
    <div className="App">
      <p>여러분 안녕??</p>
    </div>
  );
}

export default App;
