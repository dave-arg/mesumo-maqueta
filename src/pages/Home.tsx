import React from "react";
import { Novedades } from "../novedades/Novedades";
import { Catalogo } from "../catalogo/Catalogo";
import { Destacados } from "../destacados/Destacados";
import { Faqs } from "../faqs/Faqs";
import { Filtros } from "../filtros/Filtros";
import { Rubros } from "../rubros/Rubros";

export const Home = () => {
  return (
    <>
      <Novedades />
      <Destacados />
      <Rubros />
      <Filtros />
      <Catalogo />
      <Faqs />
    </>
  );
};
