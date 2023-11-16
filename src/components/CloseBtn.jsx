/* eslint-disable react/prop-types */
import "./CloseBtn.css";

export default function CloseBtn({ IsDeleted }) {
  const iWantDelete = () => {
    IsDeleted(true);
  };

  return (
    <>
      <button className="btnCerrar" onClick={iWantDelete}>
        Quitar
      </button>
    </>
  );
}
