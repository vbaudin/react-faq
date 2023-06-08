// import s from "./App.module.css";

import Datas from "../../questions.json";
import FAQCat from "../../components/FAQCat/FAQCat";

function App() {
  return (
    <div className="App">
      <h1>Ma superbe FAQ</h1>
      <div>Ma barre de recherches</div>
      <div>
        {Datas.map((cat) => {
          console.log(cat);
          return <FAQCat key={`${cat.id} ${cat.name}`} cat={cat} />;
        })}
      </div>
    </div>
  );
}

export default App;
