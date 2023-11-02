import React from "react";
import { Box, Text, Faq } from "@dave-arg/my-lib";

export const Faqs = () => {
  return (
    <Box
      maxWidth={"1152px"}
      margin={"0px auto 80px"}
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Text
        fontSize={"28px !important"}
        lineHeight={"37px !important"}
        margin={"auto"}
        marginBottom={"41px"}
      >
        Te ayudamos con tus dudas
      </Text>
      <Faq>Como se activa el token de seguridad del bip movil ?</Faq>
      <Faq>Como se activa el token de seguridad del bip movil ?</Faq>
      <Faq>Como se activa el token de seguridad del bip movil ?</Faq>
      <Faq>Como se activa el token de seguridad del bip movil ?</Faq>
      <Faq>Como se activa el token de seguridad del bip movil ?</Faq>
    </Box>
  );
};
