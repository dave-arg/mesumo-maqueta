import { Box, Text } from "@dave-arg/my-lib";
import React from "react";
import { Filtro } from "./Filtro";

export const Filtros = () => {
  return (
    <Box maxWidth={"1152px"} margin={"auto"} width={"100%"}>
      <Text lineHeight={"32px !important"} fontSize="24px !important">
        Consulta todo el catalogo de premios
      </Text>
      <Box
        display={"flex"}
        flexDirection={"row"}
        maxWidth={"500px"}
        margin={"0 0 0 auto"}
        mt={"32px"}
      >
        <Filtro
          nombre={"Filtrar por cantidad de puntos"}
          margin={"0px 16px 0px 0px"}
        />
        <Filtro nombre={"Ordenar por"} />
      </Box>
    </Box>
  );
};
