import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;

  a {
    font-weight: bold;
    font-size: 1.25em;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    color: #322153;

    &:hover {
      color: ${darken(0.1, "#322153")};
    }
  }
`;
export const Logo = styled.img``;
export const Icon = styled.span`
  margin-right: 15px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: ${darken(0.1, "#34cb79")};
  }
`;
