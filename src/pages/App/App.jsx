import React, { useState } from "react";
import * as R from "ramda";

import s from "./App.module.css";

import Datas from "../../questions.json";
import FAQCat from "../../components/FAQCat/FAQCat";

function App() {
  const [category, setCategory] = useState("All");

  const categories = R.map(({ name }) => name, Datas);

  return (
    <div className={s.app}>
      <h1>Ma superbe FAQ</h1>
      <div className={s.container}>
        <div className={s.aside}>
          <span>Un style de question en particulier ?</span>
          <span
            className={s.cat_button}
            onClick={() => {
              setCategory("All");
            }}
          >
            All
          </span>
          {R.map((cat) => {
            return (
              <span
                key={cat + "btn"}
                className={s.cat_button}
                onClick={() => {
                  setCategory(cat);
                }}
              >
                {cat}
              </span>
            );
          }, categories)}
        </div>
        <div className={s.content}>
          {R.map((cat) => {
            return (
              <FAQCat
                key={`${cat.id} ${cat.name}`}
                cat={cat}
                category={category}
              />
            );
          }, Datas)}
        </div>
      </div>
    </div>
  );
}

export default App;
