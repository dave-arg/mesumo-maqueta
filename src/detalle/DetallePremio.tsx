import { Box, Button, Img, Text } from "@dave-arg/my-lib";
import React, { useState } from "react";
import { DetalleTitle } from "./DetalleTitle";
import { Relacionados } from "./Relacionados";
import { DialogCanjear } from "../dialog/DialogCanjear";

export const DetallePremio = () => {
  const [stock, setStock] = useState<boolean>(true);
  const [canjear, SetCanjear] = useState<boolean>(false);

  return (
    <Box
      maxWidth={"1152px"}
      margin={"0px auto 80px"}
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
    >
      <DetalleTitle />
      <Box display={"flex"} flexDirection={"row"} padding={"32px 0px 80px 0px"}>
        <Img
          width={"45%"}
          height={"375px"}
          margin={"0px 32px 0px 0px"}
          borderRadius={"8px 16px 8px 16px"}
          src={
            "https://http2.mlstatic.com/D_NQ_NP_2X_961139-MLA70217776590_062023-F.webp"
          }
        />
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={"65%"}
          padding={"32px"}
        >
          <Text
            fontSize={"24px !important"}
            lineHeight={"30px !important"}
            fontWeight={"500"}
            mb={"8px"}
            onClick={() => setStock(!stock)}
          >
            Celular Samsung S23 Ultra Noseque
          </Text>{" "}
          <Text
            fontSize={"24px !important"}
            lineHeight={"30px !important"}
            mb={"32px"}
          >
            300.000 puntos
          </Text>
          <Text
            fontSize={"16px !important"}
            lineHeight={"30px !important"}
            mb={"16px"}
          >
            Codigo de producto: 51000
          </Text>
          <Text
            mb={"32px"}
            textAlign={"justify !important"}
            dangerouslySetInnerHTML={{
              __html:
                "Orden de compra canjeable por cualquier producto dentro de los siguientes locales <b>ver aquí</b>. El voucher tiene una validez de 180 días a partir de la fecha de canje. El beneficiario deberá presentarse en el local con DNI a las 72 hs hábiles de realizado el canje. El voucher no podrá canjearse por dinero en efectivo.",
            }}
          />
          {!stock && (
            <Text
              fontSize={"16px !important"}
              lineHeight={"22px !important"}
              fontWeight={"500"}
              mb={"16px"}
            >
              SIN STOCK DISPONIBLE
            </Text>
          )}
          {stock && (
            <Button
              backgroundColor={"#25B4BD"}
              color={"white"}
              width={"fit-content"}
              padding={"16px 40px !important"}
              onClick={() => SetCanjear(!canjear)}
            >
              Canjear ahora
            </Button>
          )}
        </Box>
      </Box>
      <Text lineHeight={"32px !important"} fontSize="24px !important">
        Premios que tal vez te interesen
      </Text>
      <Relacionados />
      {canjear && <DialogCanjear />}
    </Box>
  );
};
