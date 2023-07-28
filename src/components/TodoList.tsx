import { Input, Checkbox, Button } from "react-daisyui";
import { todoAtom } from "../store/TodoAtomStore";
import { ITodo } from "../store/TodoAtomStore";
import { useAtom } from "jotai";
import { ChangeEvent } from "react";

interface IProps {
  task: ITodo;
}

const TodoList = ({ task }: IProps) => {
  const [todoList, setTodoList] = useAtom(todoAtom);

  // find index task
  const indexTask = todoList.findIndex((listTask) => listTask === task);

  // update task
  const updateTask = (event: ChangeEvent<HTMLInputElement>) => {
    const tempData = [...todoList];
    tempData[indexTask].text = event.target.value;

    setTodoList(tempData)
  }

  // toggle done
  const toggleDone = () => {
    const tempData = [...todoList];
    tempData[indexTask].done = !task.done

    setTodoList(tempData)
  }

  // delete todo list
  const deleteTask = () => {
    const tempData = [...todoList];
    tempData.splice(indexTask, 1);

    setTodoList(tempData)
  }

  return (
    <div className="flex justify-center gap-x-3 my-10">
      <div className="flex w-full items-center gap-x-3 justify-center">
        <Checkbox checked={task.done} onChange={toggleDone} />
        <Input className={task.done ? "line-through" : ''} disabled={task.done} value={task.text} onChange={updateTask} />
        <Button onClick={deleteTask}>Delete</Button>
      </div>
    </div>
  );
};

export default TodoList;
