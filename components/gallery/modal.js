import { X } from "lucide-react";

const Modal = ({ clickedImg, setClickedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg(null);
    }
  };
  return (
    <div className="dismiss overlay z-50" onClick={handleClick}>
      <img src={clickedImg} alt="bigger pic" className="rounded-md shadow-md" />
      <span className="dismiss " onClick={handleClick}>
        <X />
      </span>
    </div>
  );
};

export default Modal;
