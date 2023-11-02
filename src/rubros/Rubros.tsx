import { Box, Text } from "@dave-arg/my-lib";
import React from "react";
import { Rubro } from "./Rubro";

export const Rubros = () => {
  return (
    <Box maxWidth={"1152px"} margin={"auto"} width={"100%"}>
      <Text lineHeight={"32px !important"} fontSize="24px !important">
        Rubros
      </Text>
      <Box
        mt={"32px"}
        mb={"80px"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-around"}
      >
        <Rubro nombre={"Tecnologia"} />
        <Rubro nombre={"Tecnologia"} />
        <Rubro nombre={"Tecnologia"} />
        <Rubro nombre={"Tecnologia"} />
        <Rubro nombre={"Tecnologia"} />
      </Box>
    </Box>
  );
};
