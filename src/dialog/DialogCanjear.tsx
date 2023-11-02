import React, { useState } from "react";
import { Box, Button, Input, Select, Text, Dialog } from "@dave-arg/my-lib";

export const DialogCanjear = () => {
  const [voucher, setVoucher] = useState<boolean>(false);
  const [direccion, setDireccion] = useState<boolean>(false);
  const [select, setSelect] = useState<boolean>(false);

  return (
    <Dialog title={"Todo listo para llevarte tu premio, revisa la informacion"}>
      <Text
        fontWeight={500}
        mb={"24px"}
        onClick={() => {
          setVoucher(!voucher);
        }}
        dangerouslySetInnerHTML={{
          __html: voucher
            ? "Vas a llevarte un <b>Voucher de Noseque</b> por <b>5.000</b> puntos"
            : "Vas a llevarte un <b>Celular Samsung S23 Ultra Noseque</b> por <b>300.000</b> puntos",
        }}
      />
      <Text
        fontWeight={500}
        mb={voucher ? "0px" : "24px"}
        dangerouslySetInnerHTML={{
          __html: voucher
            ? "El email de envio es <b>sheiler@gmail.com</b>"
            : "El domicilio de envio es <b>Gurruchaga 2324 2B , CABA</b> tambien podes:",
        }}
      />
      {!voucher && (
        <Text
          color={"#279D2EFF"}
          fontWeight={500}
          mb={"8px"}
          onClick={() => setSelect(!select)}
        >
          SELECCIONAR UNA DIRECCION DE ENVIO
        </Text>
      )}
      {select && (
        <Box display={"flex"} mb={"16px"}>
          {" "}
          <Select
            width={"100%"}
            padding={"8px"}
            border={"#3c3c3b solid"}
            borderWidth={"0px 0px 3px 0px"}
            mr={"8px"}
          >
            <option selected disabled>
              Gurruchaga 2324 2B , CABA
            </option>
          </Select>
          <Button backgroundColor={"#3c3c3b"} color={"#ebebeb"}>
            Cambiar
          </Button>
        </Box>
      )}{" "}
      {!voucher && (
        <Text
          color={"#279D2EFF"}
          fontWeight={500}
          mb={"8px"}
          onClick={() => setDireccion(!direccion)}
        >
          AGREGAR UNA DIRECCION DE ENVIO
        </Text>
      )}
      {direccion && (
        <Box display={"flex"} mb={"16px"}>
          <Input
            width={"100%"}
            padding={"8px"}
            border={"#3c3c3b solid"}
            borderWidth={"0px 0px 3px 0px"}
            placeholder="Localidad"
            mr={"8px"}
          />
          <Input
            width={"100%"}
            padding={"8px"}
            border={"#3c3c3b solid"}
            borderWidth={"0px 0px 3px 0px"}
            placeholder="Calle"
            mr={"8px"}
          />
          <Input
            width={"100%"}
            padding={"8px"}
            border={"#3c3c3b solid"}
            borderWidth={"0px 0px 3px 0px"}
            placeholder="Numero"
            mr={"8px"}
          />
          <Button backgroundColor={"#3c3c3b"} color={"#ebebeb"}>
            Cambiar
          </Button>
        </Box>
      )}
      <Text fontSize={"16px !important"} margin={"24px auto"} fontWeight={500}>
        Estas seguro de confirmar el canje ?
      </Text>
      <Box display={"flex"} justifyContent={"center"}>
        <Button
          mr={"16px"}
          color="#279D2EFF"
          backgroundColor={"white"}
          padding={"8px 16px !important"}
        >
          Cancelar
        </Button>
        <Button
          color="white"
          border={"2px #279D2EFF solid"}
          backgroundColor={"#279D2EFF"}
          padding={"8px 16px !important"}
        >
          Confirmar
        </Button>
      </Box>
    </Dialog>
  );
};
