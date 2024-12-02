import { useState } from "react";
// * import layout
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";

import { languages } from "../assets/data/languages";

function App() {
  console.log(languages);

  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
