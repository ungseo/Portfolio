import React from "react";
import style from "../styles/css/Modals.module.css";
import Buttons from "./Buttons";
const Modals = ({ setModalOpen }) => {
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className={style.container}>
      <h3>비밀번호를 입력해주세요.</h3>
      <form>
        <input type="password" />
        <div>
          <Buttons text={"확인"} />
          <Buttons text={"취소"} onClick={closeModal} />
        </div>
      </form>
    </div>
  );
};

export default Modals;
