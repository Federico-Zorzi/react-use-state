export default function ButtonList({ list }) {
  console.log(list);

  return list.map((item) => (
    <button key={item.id} type="button" className="btn btn-primary mx-1">
      {item.title}
    </button>
  ));
}
