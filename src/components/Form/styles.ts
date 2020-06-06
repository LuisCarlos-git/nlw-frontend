import styled, { css } from "styled-components";

interface SelectedTheme {
  selected: boolean;
}

export const Container = styled.div`
  display: flex;
  margin: 20px 0 30px;
`;
export const FormContainer = styled.form`
  max-width: 960px;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  margin: 0 auto;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Fieldset = styled.fieldset`
  border: 0;
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
`;
export const FieldName = styled.h3`
  margin-bottom: 10px;
`;
export const BoxInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: center;

  div {
    margin: 10px 0;
    width: 40%;
  }
`;
export const Label = styled.label`
  color: #333;
  font-weight: bold;
  font-size: 1.12em;
`;
export const Input = styled.input`
  width: 100%;
  margin: 5px 0;
  height: 35px;
  padding: 5px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;
export const Select = styled.select`
  display: block;
  margin: 5px 0;
  height: 35px;
  padding: 5px 15px;
  border: 1px solid #ddd;
  background: #fff;
  width: 100%;
  border-radius: 8px;
  appearance: none;
  color: #666;
`;
export const ListGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 200px);
  justify-content: space-between;
  padding: 10px 10px;
`;
export const ListItem = styled.li<SelectedTheme>`
  height: 160px;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;

  img {
    margin: 0 0 20px;
  }

  span {
    font-size: 1.25em;
    color: #333;
  }

  ${({ selected }) =>
    selected &&
    css`
      background: rgba(52, 203, 121, 0.2);
      border: 3px solid rgb(52, 203, 121);
    `}
`;
export const Button = styled.button`
  height: 50px;
  width: 40%;
  border: 0;
  border-radius: 8px;
  margin: 30px;
  background: rgb(52, 203, 121);
  color: #fff;
  font-size: 1.2em;
  font-weight: bold;
`;
