import React, { forwardRef, useState, useEffect } from "react";
import style from "./styles/css/Section.module.css";
import Buttons from "./components/Buttons";
import Modals from "./components/Modals";
const Section4 = forwardRef(({ endAnimation }, ref) => {
  const [guestbook, setGuestBook] = useState({
    name: "",
    password: "",
    content: "",
  });
  const [overBytes, setOverBytes] = useState(false);
  const changeInput = (event) => {
    const { id, value } = event.target;
    setGuestBook((prev) => ({ ...prev, [id]: value }));
  };
  const [modalOpen, setModalOpen] = useState(false);
  const handleModal = () => {
    setModalOpen((prev) => !prev);
  };
  useEffect(() => {
    const checkBytes = () => {
      if (guestbook.content.length >= 300) {
        setOverBytes(true);
        return;
      }
      setOverBytes(false);
    };
    checkBytes();
  }, [guestbook.content]);
  console.log(guestbook);
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
              <form className={style.guestform} onSubmit={""}>
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
                    placeholder="비밀번호"
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
                <Buttons type="default" text="등록" />
              </form>
            </div>
          </div>
          <div className={style.list}>
            <div className={style.comment}>
              <div className={style.commentTop}>
                <p>작성자 : 더미</p>
                <button onClick={handleModal}>삭제</button>
              </div>
              <p>
                콘텐츠더미콘텐츠더미콘텐츠더미콘텐츠더미콘텐츠더미콘텐츠더미콘텐츠더미콘텐츠더미콘텐츠더미콘텐츠더미콘텐츠더미콘텐츠더미
              </p>
              {modalOpen && <Modals setModalOpen={setModalOpen} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Section4;
