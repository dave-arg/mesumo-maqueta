import { Box } from "@dave-arg/my-lib";
import React, { useState } from "react";
import { ResultadoTitle } from "./ResultadoTitle";
import { ListaResultados } from "./ListaResultados";
import { Filtro } from "../filtros/Filtro";
import { Terminos } from "./Terminos";

export const Resultados = () => {
  const [search, setSearch] = useState<boolean>(true);

  return (
    <Box
      maxWidth={"1152px"}
      margin={"0px auto 80px"}
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      onClick={() => {
        setSearch(!search);
      }}
    >
      <ResultadoTitle esRubro={search} />
      <Box
        display={"flex"}
        flexDirection={"row"}
        maxWidth={"500px"}
        margin={"0 0 0 auto"}
        mt={"32px"}
        width={"100%"}
      >
        <Filtro
          nombre={"Filtrar por cantidad de puntos"}
          margin={"0px 16px 0px 0px"}
        />
        <Filtro nombre={"Ordenar por"} />
      </Box>{" "}
      <ListaResultados />
      {search && <Terminos />}
    </Box>
  );
};
