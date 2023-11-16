/* eslint-disable react/prop-types */
import { useState } from "react";
import "./InputTasks.css";
import { useRef } from "react";

export default function InputTasks({ callback }) {
  const inputRef = useRef(null);
  const [text, setText] = useState("");

  const subirEstado = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      callback(text);
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Nueva tarea?"
          className="inputText"
          onChange={(e) => setText(e.target.value)}
          ref={inputRef}
        />
        <input
          type="submit"
          value="Cargar"
          className="inputSubmit"
          onClick={subirEstado}
        />
      </form>
    </>
  );
}
