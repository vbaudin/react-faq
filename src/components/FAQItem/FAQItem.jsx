import React, { useState } from "react";
import s from "./FAQItem.module.css";
import close from "./arrow-up.png";
import open from "./arrow-down.png";

const FAQItem = ({ item }) => {
  const { question, answer } = item;
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className={s.container}>
      <div onClick={handleClick} className={s.question}>
        <span>{question}</span>
        <img className={s.image} src={active ? close : open} alt="" />
      </div>
      {active && <div className={s.answer}>{answer}</div>}
    </div>
  );
};

export default FAQItem;
