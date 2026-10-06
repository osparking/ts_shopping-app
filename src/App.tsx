import "./App.css";
import Greeter from "./components/Greeter";
import ShoppingList from "./ShoppingList";

function f1<T>(arg: T): T {
  return arg;
}

const f2 = <T,>(arg: T): T => {
  return arg;
};

function App() {
  return (
    <div className="App">
      <ShoppingList />
    </div>
  );
}

export default App;
