import style from "../styles/css/Certification.module.css";

const Certification = ({ name, number, date, organization }) => {
  return (
    <div className={style.container}>
      <p className={style.name}>{name}</p>
      <p className={style.number}>
        <span>번호/점수 : </span>
        {number}
      </p>
      <p className={style.number}>
        <span>취득일 : </span>
        {date}
      </p>
      <p className={style.organization}>
        <span>발행처 : </span>
        {organization}
      </p>
    </div>
  );
};

export default Certification;
