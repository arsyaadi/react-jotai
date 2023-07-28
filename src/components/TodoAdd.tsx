import { ChangeEvent, useState } from "react";
import { todoAtom } from "../store/TodoAtomStore";
import { useAtom } from "jotai";
import { v4 as uuidV4 } from "uuid";

import { Button, Input } from "react-daisyui";

const TodoAdd = () => {
  const [value, setValue] = useState<string>("");
  const [, setTodos] = useAtom(todoAtom);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleAdd = () => {
    if (value) {
      setTodos((prevTodos) => [
        ...prevTodos,
        {
          id: uuidV4(),
          text: value,
          done: false,
        },
      ]);
      setValue("");
    }
  };

  return (
    <>
      <div className="flex gap-x-3 justify-center">
        <Input value={value} onChange={handleChange} />

        <Button onClick={handleAdd}>Add Todo</Button>
      </div>
    </>
  );
};

export default TodoAdd;
