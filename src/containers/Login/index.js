import React from "react";
import styled from "styled-components";
import LoginContainer from "./LoginContainer";
import Input from "./Input";
import { ButtonContainer, LoginButton } from "./ButtonContainer";
import Logo from "../../assets/images/compact-disc.png";
export default class Login extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            borderBottomWidth: "1px",
            borderBottomColor: "#777"
          }}
        >
          <img
            style={{
              width: "80px",
              height: "80px",
              alignSelf: "center",

              marginTop: "20px",
              marginRight: "10px"
              // width: "100%"
            }}
            src={Logo}
          />
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>Music Player</p>
        </div>
        <LoginContainer>
          <form onSubmit={e => console.log(e)}>
            <div>
              <Input placeholder="email address or username" />
            </div>

            <div>
              <Input placeholder="Password" />
            </div>
            <ButtonContainer>
              <span>
                {" "}
                <input type="checkbox" placeholder="Remember Me" /> Remember Me
              </span>
              <LoginButton>LOG IN</LoginButton>
            </ButtonContainer>
          </form>
        </LoginContainer>
      </div>
    );
  }
}
