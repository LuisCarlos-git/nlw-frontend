import styled from "styled-components";
import { darken } from "polished";
import { Link } from "react-router-dom";
import bg from "../../assets/home-background.svg";

export const Container = styled.div`
  height: 100vh;
  background: url(${bg}) no-repeat 600px 120px;

  display: flex;
  flex-direction: column;
  align-content: center;
`;

export const Content = styled.div`
  max-width: 800px;
  width: 100%;
  flex: 1;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 0 70px;
`;
export const Title = styled.h1`
  font-size: 3.4em;
`;
export const Paragraph = styled.p`
  color: #6c6c80;
  font-size: 1.3em;
  padding: 15px 0;
`;
export const Button = styled(Link)`
  display: flex;
  align-items: center;
  border: 0;
  border-radius: 8px;
  height: 50px;
  overflow: hidden;
  width: 300px;
  background: #34cb79;
  font-weight: bold;
  font-size: 1.05em;
  color: #fff;
  transition: background 0.2s linear;

  &:hover {
    background: ${darken(0.05, "#34cb79")};
  }
`;
export const Icon = styled.span`
  height: 50px;
  width: 60px;
  background: rgba(0, 0, 0, 0.1);
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
