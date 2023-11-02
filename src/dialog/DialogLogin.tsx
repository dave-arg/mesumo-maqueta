import React, { useState } from "react";
import { Box, Button, Input, Text, Dialog } from "@dave-arg/my-lib";

export const DialogLogin = () => {
  const [email, setEmail] = useState<boolean>(false);

  return (
    <Dialog title={"Ingresa a tu cuenta MeSumo"}>
      <Text
        color={"#279D2EFF"}
        fontWeight={500}
        mb={"24px"}
        dangerouslySetInnerHTML={{
          __html: email
            ? "Ingresa el e-mail registrado en BIP"
            : "Ingresa el codigo de confirmacion enviado a tu e-mail",
        }}
      />
      <Box display={"flex"}>
        {" "}
        <Input
          width={"100%"}
          padding={"8px"}
          border={"#3c3c3b solid"}
          borderWidth={"0px 0px 3px 0px"}
          mr={"8px"}
        />
        <Button
          ml={"16px"}
          color="white"
          border={"2px #279D2EFF solid"}
          backgroundColor={"#279D2EFF"}
          padding={"8px 16px !important"}
          onClick={() => setEmail(!email)}
        >
          Enviar
        </Button>
      </Box>
    </Dialog>
  );
};
