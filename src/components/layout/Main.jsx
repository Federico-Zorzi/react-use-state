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
    indexLanguageSelected !== index
      ? setIndexLanguageSelected(index)
      : setIndexLanguageSelected(-1);

    const cardLanguageSelected = [
      languages[index].title,
      languages[index].description,
    ];

    const emptyCardLanguage = [
      "Nessun linguaggio selezionato",
      "Selezionare un linguaggio ricevere informazioni su esso",
    ];

    const updateLanguage =
      indexLanguageSelected === -1 ? emptyCardLanguage : cardLanguageSelected;

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
