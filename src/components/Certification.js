import style from "../styles/css/Certification.module.css";

const Certification = ({ name, number, date, organization, img }) => {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <div className={style.img} style={{ backgroundImage: `${""}` }}></div>
      </div>
      <div className={style.right}>
        <p className={style.name}>{name}</p>
        <p className={style.number}>{number}</p>
        <p className={style.number}>{date}</p>
        <p className={style.organization}>{organization}</p>
      </div>
    </div>
  );
};

export default Certification;
