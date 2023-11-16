/* eslint-disable react/prop-types */
import TaskElement from "./TaskElement";
import "./ContainerTasks.css";
export default function ContainerTasks({ array, callback }) {
  const IsDelete = (index) => {
    const newArray = [...array];
    newArray.splice(index, 1);
    callback(newArray);
  };

  return (
    <>
      <section className="containerTasks">
        {array.map((element, index) => (
          <TaskElement
            key={index}
            text={element}
            callback={IsDelete}
            a={index}
          />
        ))}
      </section>
    </>
  );
}
