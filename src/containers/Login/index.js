import React from "react";
import styled from "styled-components";
import LoginContainer from "./LoginContainer";
import Input from "./Input";
import { ButtonContainer, LoginButton } from "./ButtonContainer";
import Logo from "../../assets/images/compact-disc.png";
import { Link } from "react-router-dom";
import firebase, { auth } from "../../firebase";
import Spinner from "../../assets/images/spinner.gif";
import { CircleSpinner } from "react-spinners-kit";
const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 80px;
  height: 80px;
  // align-self: center;

  margin-top: 20px;
  margin-right: 10px;
`;

const LogoText = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

const ForgotPassword = styled(Link)`
  color: #1ec760;
  text-align: center;
  text-decoration: none;
  padding: 40px 120px;
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
  &:hover {
    color: #1ed760;
  }
`;

const RegisterContainer = styled.div`
  width: 300px;
  margin: 80px 0px;
`;
export default class Login extends React.Component {
  state = {
    email: "",
    password: "",
    error: null,
    isLoading: false
  };
  onSignin = async () => {
    const { email, password } = this.state;
    this.setState({ isLoading: true });
    try {
      const signInResponse = await auth.signInWithEmailAndPassword(
        email,
        password
      );
      console.log("success=", signInResponse);
      this.setState({ error: null });
    } catch (error) {
      console.log("error=", error);
      this.setState({ error });
    }
    this.setState({ isLoading: false });
  };

  render() {
    const { email, password, error } = this.state;
    return (
      <div>
        <LogoContainer>
          <LogoImage src={Logo} />
          <LogoText>Music Player</LogoText>
        </LogoContainer>
        <LoginContainer>
          <form onSubmit={e => console.log(e)}>
            <div>
              <Input
                type="email"
                placeholder="email address or username"
                onChange={e => this.setState({ email: e.target.value })}
                value={email}
              />
              {error && error.code == "auth/user-not-found" && (
                <p style={{ color: "red", fontSize: "11px" }}>
                  {error.message}
                </p>
              )}
            </div>

            <div>
              <Input
                placeholder="Password"
                onChange={e => this.setState({ password: e.target.value })}
                value={password}
                type="password"
              />
              {error && error.code == "auth/wrong-password" && (
                <p
                  style={{
                    color: "red",
                    fontSize: "11px",
                    textAlign: "center"
                  }}
                >
                  {error.message}
                </p>
              )}
            </div>

            <ButtonContainer>
              <span>
                {" "}
                <input type="checkbox" placeholder="Remember Me" /> Remember Me
              </span>
              <LoginButton onClick={this.onSignin}>
                LOG IN
                {this.state.isLoading && (
                  <span style={{ marginLeft: "10px" }}>
                    <CircleSpinner size={15} />
                  </span>
                )}
              </LoginButton>
            </ButtonContainer>

            <ForgotPassword>Forgot your password?</ForgotPassword>
            <div>
              <RegisterContainer>
                <p>Don't have an account?</p>
              </RegisterContainer>
            </div>
          </form>
        </LoginContainer>
      </div>
    );
  }
}
