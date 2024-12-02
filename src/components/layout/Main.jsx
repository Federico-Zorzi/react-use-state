import { useState } from "react";

import Card from "../Card";
import ButtonList from "../button languages/ButtonList";

import { languages } from "../../assets/data/languages";

export default function Main() {
  let [actualLanguage, setActualLanguage] = useState([
    languages[0].title,
    languages[0].description,
  ]);

  let [indexLanguageSelected, setIndexLanguageSelected] = useState(0);

  const chooseLanguage = (index) => {
    const updateLanguage = [];
    updateLanguage[0] = languages[index].title;
    updateLanguage[1] = languages[index].description;

    setIndexLanguageSelected(index);
    setActualLanguage(updateLanguage);
  };

  return (
    <main>
      <div className="container">
        <ButtonList
          list={languages}
          actualLanguageIndex={indexLanguageSelected}
          chooseLanguage={chooseLanguage}
        ></ButtonList>
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
