export default function Button({ index, item, chooseLanguage, background }) {
  return (
    <button
      type="button"
      className={"btn mx-1 " + background}
      onClick={() => chooseLanguage(index)}
    >
      {item.title}
    </button>
  );
}
