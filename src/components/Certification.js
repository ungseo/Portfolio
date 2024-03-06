import style from "../styles/css/Certification.module.css";

const Certification = ({ name, number, date, organization }) => {
  return (
    <div className={style.container}>
      <p className={style.name}>{name}</p>
      <p className={style.number}>
        <span className={style.a}>번호/점수 : </span>
        <span className={style.b}>{number}</span>
      </p>
      <p className={style.number}>
        <span className={style.a}>취득일 : </span>
        <span className={style.b}>{date}</span>
      </p>
      <p className={style.organization}>
        <span className={style.a}>발행처 : </span>
        <span className={style.b}>{organization}</span>
      </p>
    </div>
  );
};

export default Certification;
