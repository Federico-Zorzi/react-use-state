import Card from "../Card";
import ButtonList from "../ButtonList";

import { languages } from "../../assets/data/languages";

export default function Main() {
  return (
    <main>
      <div className="container">
        <section className="buttons-list">
          <ButtonList list={languages}></ButtonList>
        </section>
        <section className="card-selected py-4">
          <Card></Card>
        </section>
      </div>
    </main>
  );
}
