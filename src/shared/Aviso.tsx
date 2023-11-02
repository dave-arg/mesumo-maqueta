import React from "react";
import { Text } from "@dave-arg/my-lib";

export const Aviso = () => {
  return (
    <Text
      fontSize={"16px !important"}
      fontWeight={"500"}
      margin={"0px auto 48px"}
      color={"#279D2EFF"}
    >
      Para poder utilizar el nuevo catalogo debes aceptar los terminos y
      condiciones del programa en <b>BIP</b>
    </Text>
  );
};
