import { ReactNode, useState } from "react";
import { Header } from "../header/Header";
import { Box, BackTop } from "@dave-arg/my-lib";
import { Footer } from "../footer/Footer";
import { Aviso } from "./Aviso";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { DialogLogin } from "../dialog/DialogLogin";
import { DetallePremio } from "../detalle/DetallePremio";
import { Resultados } from "../resultado/Resultados";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [login, setLogin] = useState<boolean>(false);
  const [popup, setPopup] = useState<boolean>(false);

  const toggleLogin = (login: boolean) => {
    setLogin(login);
  };

  const togglePopup = (popup: boolean) => {
    setPopup(popup);
  };

  return (
    <Box id="DivLayout" display={"flex"} flexDirection={"column"}>
      <Header
        isLogged={login}
        isPopup={popup}
        toggleLogin={toggleLogin}
        togglePopup={togglePopup}
      />
      {!login && <Aviso />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="detalle" element={<DetallePremio />}></Route>
          <Route path="resultado" element={<Resultados />}></Route>
        </Routes>
      </BrowserRouter>
      <BackTop />
      <Footer />
      {popup && <DialogLogin />}
    </Box>
  );
};
