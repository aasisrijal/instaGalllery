import React from "react";

const Modal = ({ selectImg, setSelectImg }) => {
  //   console.log(selectImg);
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectImg(null);
    }
  };

  return (
    <div className="backdrop" onClick={handleClick}>
      <img src={selectImg} alt="enlarged pic" />
    </div>
  );
};

export default Modal;
