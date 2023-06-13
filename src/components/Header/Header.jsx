import s from "./Header.module.css";

import logo from "../../assets/logo.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

const Header = () => {
  return (
    <div className={s.container}>
      <div className={s.box}>
        <img className={s.logo} src={logo} alt="logo" />
      </div>
      <div className={s.box}>
        <div className={s.menu}>
          <div>Projets</div>
          <div>À propos</div>
          <div>Contact</div>
        </div>
      </div>
      <div className={s.box}>
        <div className={s.socials}>
          <img src={github} alt="github logo" />
          <img src={linkedin} alt="linkedin logo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
