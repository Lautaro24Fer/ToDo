/* eslint-disable react/prop-types */
import "./TaskElement.css";
import CloseBtn from "./CloseBtn";

export default function TaskElement({ a, text, callback }) {
  const IsDeleted = (ban) => {
    if (ban) {
      callback(a);
    }
  };

  return (
    <>
      <article key={a} className="taskEl">
        <p>{text}</p>
        <CloseBtn IsDeleted={IsDeleted} />
      </article>
    </>
  );
}
