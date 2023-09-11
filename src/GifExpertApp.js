import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export const GifExpertApp = () => {
  //const categorias = ['Bob esponja', 'Minions', 'Sherk'];
  const [categorias, setCategorias] = useState([
    "Bob esponja",
    "Minions",
    "Sherk",
  ]);
  // const handleAdd = () => {
  //     setCategorias([...categorias, 'Simpsons'])
  //     //setCategorias( cats => [...cats, 'Simpsons'])
  // }
  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategorias={setCategorias} />
      <hr />

      <ol>
        {categorias.map((cat) => (
          <GifGrid key={cat} categoria={cat} />
        ))}
      </ol>
    </div>
  );
};

export default GifExpertApp;
