import style from "../styles/css/Skills.module.css";
import { getRatingStars } from "../uitls/utils";

const Skill = ({ name, rating, discription }) => {
  const stars = getRatingStars(rating);

  return (
    <div className={style.container}>
      <div className={style.logo}>
        <div className={style.img}></div>
      </div>
      <div>
        <p className={style.name}>{name}</p>
        <p className={style.rating}>{stars}</p>
        <p className={style.discription}>{discription}</p>
      </div>
    </div>
  );
};

export default Skill;
