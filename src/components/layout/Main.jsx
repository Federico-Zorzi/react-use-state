import { useState } from "react";

import Card from "../Card";
import ButtonList from "../ButtonList";

import { languages } from "../../assets/data/languages";

export default function Main() {
  let [actualLanguage, setActualLanguage] = useState([
    languages[0].title,
    languages[0].description,
  ]);

  const chooseLanguage = (index) => {
    const updateLanguage = [];
    updateLanguage[0] = languages[index].title;
    updateLanguage[1] = languages[index].description;

    setActualLanguage(updateLanguage);
  };

  return (
    <main>
      <div className="container">
        <section className="buttons-list">
          <ButtonList
            list={languages}
            chooseLanguage={chooseLanguage}
          ></ButtonList>
        </section>
        <section className="card-selected py-4">
          <Card
            title={actualLanguage[0]}
            description={actualLanguage[1]}
          ></Card>
        </section>
      </div>
    </main>
  );
}
