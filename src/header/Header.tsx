import { Box, Button, Text, Logo } from "@dave-arg/my-lib";
import { Buscador } from "./Buscador";

interface HeaderProps {
  isLogged: boolean;
  isPopup: boolean;
  toggleLogin: (login: boolean) => void;
  togglePopup: (popup: boolean) => void;
}

export const Header = ({
  isLogged,
  isPopup,
  toggleLogin,
  togglePopup,
}: HeaderProps) => {
  return (
    <Box
      background={"linear-gradient(-45deg, #279D2EFF, #25B4BDFF)"}
      padding={"20px 0px"}
      position={"fixed"}
      width={"100%"}
      top={"0"}
      zIndex={3}
    >
      <Box
        maxWidth={"1152px"}
        width={["100%"]}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        margin={"auto"}
      >
        <Logo />
        <Buscador />
        {!isLogged && (
          <Button
            height={"40px"}
            width={"100px"}
            color="#279D2EFF"
            border={"2px white solid"}
            backgroundColor={"white"}
            padding={"8px !important"}
            onClick={() => toggleLogin(!isLogged)}
          >
            Ingresar
          </Button>
        )}{" "}
        {isLogged && (
          <Box display={"flex"}>
            <Text
              fontSize={"15px !important"}
              lineHeight={"20px !important"}
              color={"white"}
              marginRight={"32px"}
              onClick={() => togglePopup(!isPopup)}
            >
              Hola Silvio Heiler <br />
              Tenes <b>6000</b> puntos
            </Text>
            <Button
              height={"100%"}
              width={"100px"}
              color="white"
              border={"2px solid"}
              backgroundColor={"transparent"}
              padding={"8px !important"}
              onClick={() => toggleLogin(!isLogged)}
            >
              Salir
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};
