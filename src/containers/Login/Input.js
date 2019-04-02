import styled from "styled-components";

const Input = styled.input`
  height: 30px;
  width: 400px;
  padding: 5px 10px;
  margin: 5px 0px;
  outline: none;
  border: 1px solid #ddd;

  &:focus {
    border: 1px solid #444;
  }
`;

export default Input;
