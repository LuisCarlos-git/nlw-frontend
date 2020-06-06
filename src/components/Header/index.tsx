import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import { Container, Logo, Icon } from "./styles";

import LogoEco from "../../assets/logo.svg";

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <Container>
      <Logo src={LogoEco} />

      {location.pathname === "/register" ? (
        <Link to="/">
          <Icon>
            <FiArrowLeft size={20} color="#34cb79" />
          </Icon>
          Voltar a pagina inicial
        </Link>
      ) : null}
    </Container>
  );
};

export default Header;
