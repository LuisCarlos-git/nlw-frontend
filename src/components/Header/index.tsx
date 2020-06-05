import React from "react";

import { Container, Logo } from "./styles";

import LogoEco from "../../assets/logo.svg";

const Header: React.FC = () => {
  return (
    <Container>
      <Logo src={LogoEco} />
    </Container>
  );
};

export default Header;
