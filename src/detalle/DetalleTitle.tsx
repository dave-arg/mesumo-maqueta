import { Box, Text } from "@dave-arg/my-lib";
import React from "react";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 26.2 26.2" style="fill: #3c3c3b" xml:space="preserve"><g><g><path d="M18.1,26.1H8.3c-1.7,0-3.2-1.4-3.2-3.2V3.2c0-1.7,1.4-3.2,3.2-3.2h9.8c1.7,0,3.2,1.4,3.2,3.2V23    C21.3,24.7,19.9,26.1,18.1,26.1z M8.3,1.5c-1,0-1.8,0.8-1.8,1.8V23c0,1,0.8,1.8,1.8,1.8h9.8c1,0,1.8-0.8,1.8-1.8V3.2    c0-1-0.8-1.8-1.8-1.8H8.3z"></path></g><rect x="8.2" y="20.2" width="9.9" height="1.4"></rect><path d="M14.2,5.6h-2.1c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7h2.1c0.4,0,0.7,0.3,0.7,0.7S14.6,5.6,14.2,5.6z"></path></g></svg>`;

export const DetalleTitle = () => {
  return (
    <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
      <Box
        dangerouslySetInnerHTML={{ __html: svg }}
        width={"32px"}
        height={"32px"}
      />
      <Text
        fontSize={"18px !important"}
        lineHeight={"24px !important"}
        fontWeight={"500"}
      >
        Electronica
      </Text>
    </Box>
  );
};
