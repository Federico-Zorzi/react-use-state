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
        const background =
          index !== actualLanguageIndex ? "btn-primary" : "btn-warning";

        return (
          <Button
            key={item.id}
            index={index}
            item={item}
            chooseLanguage={chooseLanguage}
            background={background}
          ></Button>
        );
      })}
    </section>
  );
}
