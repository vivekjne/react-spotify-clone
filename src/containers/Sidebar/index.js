import React, { Component } from "react";
import SidebarContainer from "./SidebarContainer";
import styled from "styled-components";
import { images } from "../../assets/images";
import logo from "../../assets/images/compact-disc.png";
import Links from "./Links";
import homeActive from "../../assets/images/home_active.png";
import homeInactive from "../../assets/images/home_inactive.png";
import searchActive from "../../assets/images/search_active.png";
import searchInactive from "../../assets/images/search_inactive.png";
import libraryActive from "../../assets/images/library_active.png";
import libraryInactive from "../../assets/images/library_inactive.png";
import { Route, Link } from "react-router-dom";

const LogoContainer = styled.div`
  display: flex;

  align-items: center;
  font-size: 20px;
`;

const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: #fff;
`;

const SiteName = styled.p`
  color: #fff;
  margin-left: 10px;
  font-weight: bold;
`;

const StyledRegister = styled.div`
  background: #fff;
  color: #000;
  height: 35px;
  width: 210px;
  border-radius: 20px;
  text-decoration: none;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  translation: 0.2s;

  &:hover {
    transform: scale(0.98) translate(0px, 2px);
  }
  &:active {
    transform: translate(0px, 5px) scale(0.95);
  }
`;

const StyledLogin = styled.div`
  background: #222;
  color: #fff;
  margin-top: 20px;
  border: 2px solid #fff;
  height: 35px;
  width: 210px;
  border-radius: 20px;
  text-decoration: none;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default class Sidebar extends Component {
  render() {
    return (
      <SidebarContainer>
        <div>
          <LogoContainer>
            <LogoImage src={logo} />
            <SiteName>Music Player</SiteName>
          </LogoContainer>

          <Links
            linkName="Home"
            linkImage={homeActive}
            linkImageInactive={homeInactive}
            linkUrl={"/"}
          />
          <Links
            linkName="Search"
            linkImage={searchActive}
            linkImageInactive={searchInactive}
            linkUrl={"/search"}
          />
          <Links
            linkName="My Library"
            linkImage={libraryActive}
            linkImageInactive={libraryInactive}
            linkUrl={"/library"}
          />
        </div>

        <div style={{ marginBottom: "100px" }}>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <StyledRegister>SIGN UP</StyledRegister>
          </Link>

          <Link to="/login" style={{ textDecoration: "none" }}>
            <StyledLogin>LOG IN</StyledLogin>
          </Link>
        </div>
      </SidebarContainer>
    );
  }
}
