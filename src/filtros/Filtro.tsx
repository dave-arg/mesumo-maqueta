import { Select } from "@dave-arg/my-lib";
import React from "react";

interface FiltroProps {
  nombre: string;
  margin?: string;
}

export const Filtro = ({ nombre, margin }: FiltroProps) => {
  return (
    <Select
      width={"100%"}
      padding={"8px"}
      border={"#3c3c3b solid"}
      borderWidth={"0px 0px 3px 0px"}
      margin={margin}
    >
      <option selected disabled>
        {nombre}
      </option>
    </Select>
  );
};
