import { Box, Input } from "@dave-arg/my-lib";
import React from "react";

const BuscarSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0,0,256,256"style="fill:#6666;"><g stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M21,3c-9.37891,0 -17,7.62109 -17,17c0,9.37891 7.62109,17 17,17c3.71094,0 7.14063,-1.19531 9.9375,-3.21875l13.15625,13.125l2.8125,-2.8125l-13,-13.03125c2.55469,-2.97656 4.09375,-6.83984 4.09375,-11.0625c0,-9.37891 -7.62109,-17 -17,-17zM21,5c8.29688,0 15,6.70313 15,15c0,8.29688 -6.70312,15 -15,15c-8.29687,0 -15,-6.70312 -15,-15c0,-8.29687 6.70313,-15 15,-15z"></path></g></g></svg>';

export const Buscador = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      height={"40px"}
      backgroundColor={"white"}
    >
      <Input
        placeholder={"Busca algo que te gustaria..."}
        padding={"12px"}
        border={"none"}
        width={"400px"}
        outline={"none"}
      />
      <Box
        width={"20px"}
        margin={"auto 8px"}
        dangerouslySetInnerHTML={{ __html: BuscarSvg }}
      />
    </Box>
  );
};