import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
display:flex;
flex:1,
align-items:center;
justify-content:center;
flex-wrap: wrap;
min-width:400px;

`;
const StyledLink = styled(Link)`
  color: ${props => (props.active ? "#fff" : "#aeaeae")};
  font-size: 14px;

  text-decoration: none;
  text-transform: uppercase;
  margin: 0px 20px;
`;
const LinkContainer = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
const Underline = styled.div`
  background: green;
  width: 30px;
  position: absolute;
  bottom: 0;
  height: 2px;
  left: 40%;
  opacity: ${props => (props.active ? 1 : 0)};
`;

export default class Navbar extends React.Component {
  render() {
    return (
      <Container>
        <LinkContainer>
          <StyledLink active>Featured</StyledLink>
          <Underline active />
        </LinkContainer>
        <LinkContainer>
          <StyledLink>PODCASTS</StyledLink>
          <Underline />
        </LinkContainer>
        <LinkContainer>
          <StyledLink>Genres &amp; Moods</StyledLink>
          <Underline />
        </LinkContainer>
        <LinkContainer>
          <StyledLink>New Releases</StyledLink>
          <Underline />
        </LinkContainer>
        <LinkContainer>
          <StyledLink>Discover</StyledLink>
          <Underline />
        </LinkContainer>
      </Container>
    );
  }
}
