import React from "react";
import { MdSearch } from "react-icons/md";

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

        <Button type="button">
          <Icon>
            <MdSearch size={20} color="#fff" />
          </Icon>
          Casdastrar ponto de coleta
        </Button>
      </Content>
    </Container>
  );
};

export default Home;
