import InputTasks from "./components/InputTasks.jsx";
import ContainerTasks from "./components/ContainerTasks.jsx";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const updateTasks = (value) => {
    setTasks([...tasks, value]);
  };

  const updateDeleteTasks = (newArray) => {
    setTasks(newArray);
  };

  return (
    <>
      <main>
        <header>
          <h1>To Do</h1>
          <InputTasks callback={updateTasks} />
        </header>
        <ContainerTasks array={tasks} callback={updateDeleteTasks} />
      </main>
    </>
  );
}
