import React from "react";
import { FiLogIn } from "react-icons/fi";

import Header from "../../components/Header";
import { Container, Content, Title, Paragraph, Button, Icon } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Title>
          Seu marketplace
          <br /> de coleta de resíduos
        </Title>
        <Paragraph>
          Ajudamos pessoas a encontrarem pontos
          <br /> de coleta de forma eficiente.
        </Paragraph>

        <Button to="/register">
          <Icon>
            <FiLogIn size={20} color="#fff" />
          </Icon>
          Casdastrar ponto de coleta
        </Button>
      </Content>
    </Container>
  );
};

export default Home;
