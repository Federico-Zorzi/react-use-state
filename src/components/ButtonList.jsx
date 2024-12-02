export default function ButtonList({ list, chooseLanguage }) {
  return list.map((item, index) => (
    <button
      key={item.id}
      onClick={() => chooseLanguage(index)}
      type="button"
      className="btn btn-primary mx-1"
    >
      {item.title}
    </button>
  ));
}
