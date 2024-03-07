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

      newList.sort((a, b) => {
        const dateA = new Date(Object.values(a)[0].date);
        const dateB = new Date(Object.values(b)[0].date);
        return dateA - dateB;
      });

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
    if (data.name.includes("김웅서")) {
      alert("사칭하지 말아주세요!!!!!!");
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
  return (
    <div id={style.section4} ref={ref}>
      <div className={`${endAnimation ? style.contentWrapper : style.none}`}>
        <h1>More About Me</h1>
        <div className={style.content}>
          <div className={style.contactWrapper}>
            <div className={style.contact}>
              <h1>Contact</h1>
              <a
                href="https://github.com/ungseo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Git hub
              </a>
              <a
                href="https://ungseo.notion.site/d9dba6b5f352408c94bc4f7f0c0eb8b7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Notion
              </a>
              <a
                href="https://dev-get-jop.tistory.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
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
                    <Buttons
                      type="Xbtn"
                      text="X"
                      onClick={handleModal}
                      id={Object.keys(cmt)}
                    />
                  </div>
                </div>
                <p className={style.commentBottom}>
                  {cmt[Object.keys(cmt)]["content"]}
                </p>

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
