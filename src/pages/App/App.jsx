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
      <h1 className={s.title}>Ma superbe FAQ</h1>
      <div className={s.container}>
        <div className={s.aside}>
          <span
            className={`${s.cat_button} + ${
              category === "All" && s.cat_active
            }`}
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
                className={`${s.cat_button} + ${
                  category === cat && s.cat_active
                }`}
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
