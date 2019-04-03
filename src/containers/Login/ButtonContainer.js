import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 420px;
  margin: 0px 0px;
  padding: 20px 0px;
  justify-content: space-between;
  // border-bottom: 1px solid #ccc;
`;

const LoginButton = styled.div`
  cursor: pointer;
  height: 50px;
  width: 200px;
  text-align: center;
  color: #fff;
  background: #1ec760;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;

  &:hover {
    background: #1ed760;
  }
`;
export { ButtonContainer, LoginButton };
