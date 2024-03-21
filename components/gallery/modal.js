import { X } from "lucide-react";
import Image from "next/image";

const Modal = ({ clickedImg, setClickedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg(null);
    }
  };
  return (
    <div className="overlay dismiss z-50" onClick={handleClick}>
      <img src={clickedImg} alt="bigger pic" className="rounded-md" />
      <span className="dismiss" onClick={handleClick}>
        <X />
      </span>
    </div>
  );
};

export default Modal;
