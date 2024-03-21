const Modal = ({ clickedImg, setClickedImg }) => {
  return (
    <div className="dismiss overlay z-50" onClick={() => setClickedImg(null)}>
      <img src={clickedImg} alt="bigger pic" className="rounded-md shadow-md" />
    </div>
  );
};

export default Modal;
