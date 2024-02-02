import style from "../styles/css/Skills.module.css";
import { getRatingStars } from "../utils/utils";

const Skill = ({ name, rating, discription }) => {
  const stars = getRatingStars(rating);

  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.logo}>
          <div className={style.img}></div>
        </div>
        <div className={style.text}>
          <p className={style.name}>{name}</p>
          <p className={style.rating}>{stars}</p>
        </div>
        <div className={style.line}></div>
      </div>
      <p className={style.discription}>{discription}</p>
    </div>
  );
};

export default Skill;
