import { Box, Text, Destacado } from "@dave-arg/my-lib";
import React from "react";

export const Destacados = () => {
  return (
    <Box maxWidth={"1152px"} margin={"auto"} width={"100%"}>
      <Text lineHeight={"32px !important"} fontSize="24px !important">
        Destacados
      </Text>
      <Box mt={"32px"} mb={"80px"} display={"flex"} flexDirection={"row"}>
        <Destacado padding={"0px 12px 0px 0px"} />
        <Destacado />
      </Box>
    </Box>
  );
};
