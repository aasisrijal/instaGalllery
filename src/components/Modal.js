import React from "react";
import { motion } from "framer-motion";

const Modal = ({ selectImg, setSelectImg }) => {
  //   console.log(selectImg);
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectImg(null);
    }
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      inital={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectImg}
        alt="enlarged pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};

export default Modal;
