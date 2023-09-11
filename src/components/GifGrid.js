//import React, { useState, useEffect } from "react";
import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GIfGeidItem from "./GIfGeidItem";

const GifGrid = ({ categoria }) => {
  const { data:img, loading } = useFetchGifs(categoria);

  return (
    <>
      <h3 className="card animate__animated animate__fadeInDown">{categoria}</h3>
      {loading && <p className="card animate__animated animate__flash">Cargando..</p>}
      <div className="card-grid">
        {img.map((img) => (
          <GIfGeidItem {...img} key={img.id} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
