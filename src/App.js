import "./App.css";
import TodoList from "./components/TodoList";
import Header from "./components/header"

function App() {
  return (
    <div className="App">
      <Header/>
      <TodoList />
    </div>
  );
}

export default App;
