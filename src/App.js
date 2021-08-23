import logo from "./logo.svg";
import "./App.css";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";

function App() {
  return (
    <TodoTemplate>
      <TodoHead />
      <TodoList />
      <TodoCreate />
    </TodoTemplate>
  );
}

export default App;
