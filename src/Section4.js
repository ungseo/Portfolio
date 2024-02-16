import { collection, getDocs } from "firebase/firestore";
import React, { forwardRef, useState, useEffect } from "react";
import style from "./styles/css/Section.module.css";
import Buttons from "./components/Buttons";
import Modals from "./components/Modals";
import { ReadDB, WriteDB, db } from "./Firebase";
import { formatDate } from "./utils/utils";
const Section4 = forwardRef(({ endAnimation }, ref) => {
  const [commentList, setCommentList] = useState([]);
  const getDB = () => {
    ReadDB().then((res) => {
      const newList = [];
      res.forEach((comment) => newList.push({ [comment.id]: comment.data() }));
      setCommentList(newList);
    });
  };
  const [delData, setDelData] = useState("");

  const [guestbook, setGuestBook] = useState({
    name: "",
    password: "",
    content: "",
  });
  const addDB = () => {
    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);
    const data = { ...guestbook, date: formattedDate };
    if (overBytes) {
      alert("내용이 너무 많아요!");
      return;
    }
    if (data.name === "") {
      alert("이름을 입력해주세요");
      return;
    } else if (data.content === "") {
      alert("내용을 입력해주세요");
      return;
    } else if (data.password === "") {
      alert("비밀번호를 입력해주세요");
      return;
    } else {
      console.log(data);
      WriteDB(data)
        .then((res) => {
          console.log("DB저장성공");
          setGuestBook({
            name: "",
            password: "",
            content: "",
          });
        })
        .then(() => {
          getDB();
        })
        .catch((err) => console.log(err));
    }
  };
  const [overBytes, setOverBytes] = useState(false);
  const changeInput = (event) => {
    const { id, value } = event.target;
    setGuestBook((prev) => ({ ...prev, [id]: value }));
  };
  const [modalOpen, setModalOpen] = useState(false);
  const handleModal = (event) => {
    const { id } = event.target;
    setModalOpen((prev) => !prev);
    setDelData(id);
  };
  const checkBytes = () => {
    if (guestbook.content.length >= 300) {
      setOverBytes(true);
      return;
    }
    setOverBytes(false);
  };
  useEffect(() => {
    checkBytes();
  }, [guestbook.content]);
  useEffect(() => {
    getDB();
  }, []);
  console.log(delData);
  return (
    <div id={style.section4} ref={ref}>
      <div className={`${endAnimation ? style.contentWrapper : style.none}`}>
        <h1>More About Me</h1>
        <div className={style.content}>
          <div className={style.contactWrapper}>
            <div className={style.contact}>
              <h1>Contact</h1>
              <a href="https://github.com/ungseo">Git hub</a>
              <br />
              <a href="">Notion</a>
              <br />
              <a href="">Blog</a>
              <br />
              <p>email: ungseo@gmail.com</p>
              <p>phone number: +82-010-9402-3393</p>
            </div>
            <div className={style.guestbook}>
              <h1>GuestBook</h1>
              <div className={style.guestform}>
                <div className={style.info}>
                  <input
                    type="text"
                    placeholder="작성자"
                    id="name"
                    value={guestbook.name}
                    onChange={changeInput}
                  />
                  <input
                    type="password"
                    placeholder="비밀번호(삭제할때 필요해요)"
                    id="password"
                    value={guestbook.password}
                    onChange={changeInput}
                  />
                </div>
                <div className={style.areaWrapper}>
                  <textarea
                    id="content"
                    cols="30"
                    rows="10"
                    placeholder="내용을 입력해주세요. (최대 300자)"
                    value={guestbook.content}
                    onChange={changeInput}
                  ></textarea>
                  <span
                    className={style.byte}
                    style={{ color: `${overBytes ? "red" : "black"}` }}
                  >
                    ({guestbook.content.length}/300)
                  </span>
                </div>
                <Buttons type="default" text="등록" onClick={addDB} />
              </div>
            </div>
          </div>
          <div className={style.list}>
            {commentList.map((cmt, idx) => (
              <div key={idx} className={style.comment}>
                <div className={style.commentTop}>
                  <p>작성자 : {cmt[Object.keys(cmt)]["name"]}</p>
                  <div className={style.right}>
                    <p>{cmt[Object.keys(cmt)]["date"]}</p>
                    <button onClick={handleModal} id={Object.keys(cmt)}>
                      삭제
                    </button>
                  </div>
                </div>
                <p>{cmt[Object.keys(cmt)]["content"]}</p>

                <Modals
                  setModalOpen={setModalOpen}
                  modalOpen={modalOpen}
                  data={delData}
                  getDB={getDB}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Section4;
