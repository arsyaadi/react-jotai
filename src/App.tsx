import "./App.css";
import { todoAtom } from "./store/TodoAtomStore";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";
import { useAtom } from "jotai";

function App() {
  const [todos] = useAtom(todoAtom);

  return (
    <div>
      <h1 className="text-4xl my-5 font-bold">Todo List</h1>

      {/* list task */}
      {todos.map((task, index) => (
        <TodoList key={index} task={task} />
      ))}

      {/* add task */}
      <TodoAdd />
    </div>
  );
}

export default App;
