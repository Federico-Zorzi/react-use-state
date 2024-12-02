import Button from "./Button";
export default function ButtonList({
  list,
  actualLanguageIndex,
  chooseLanguage,
}) {
  console.log(actualLanguageIndex);

  return (
    <section className="buttons-list">
      {list.map((item, index) => {
        if (index !== actualLanguageIndex) {
          return (
            <Button
              key={item.id}
              index={index}
              item={item}
              chooseLanguage={chooseLanguage}
              background="btn-primary"
            ></Button>
          );
        } else {
          return (
            <Button
              key={item.id}
              index={index}
              item={item}
              chooseLanguage={chooseLanguage}
              background="btn-warning"
            ></Button>
          );
        }
      })}
    </section>
  );
}
