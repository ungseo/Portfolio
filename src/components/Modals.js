import React, { useState, useEffect } from "react";
import style from "../styles/css/Modals.module.css";
import Buttons from "./Buttons";
import { DeleteDB, ReadDB } from "../Firebase";

const Modals = ({ setModalOpen, data, modalOpen, getDB }) => {
  const closeModal = () => {
    setModalOpen(false);
  };
  const [inputPW, setInputPW] = useState("");
  const inputHandler = (event) => {
    setInputPW(event.target.value);
  };

  const handleSubmit = () => {
    ReadDB().then((rst) =>
      rst.forEach((d) => {
        if (d.id == data) {
          if (d.data()["password"] == inputPW) {
            DeleteDB(d.id)
              .then(() => {
                getDB();
                alert("삭제했습니다.");
              })
              .then(() => setModalOpen(false));
          }
        }
      })
    );
  };

  return (
    <div>
      <div
        className={style.container}
        style={{ visibility: `${modalOpen ? "visible" : "hidden"}` }}
      >
        <h3>비밀번호를 입력해주세요.</h3>
        <input type="password" value={inputPW} onChange={inputHandler} />
        <div>
          <Buttons text={"확인"} onClick={handleSubmit} />
          <Buttons type="cancle" text={"취소"} onClick={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default Modals;
