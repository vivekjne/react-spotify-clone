import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const Container = styled.div`
display:flex;
flex:1,
align-items:center;
justify-content:center;
flex-wrap: wrap;
min-width:400px;

`;
const StyledLink = styled(NavLink)`
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
          <StyledLink
            exact
            to="/featured"
            active={this.props.isActive == "/featured"}
          >
            Featured
          </StyledLink>
          <Underline active={this.props.isActive == "/featured"} />
        </LinkContainer>
        <LinkContainer>
          <StyledLink
            exact
            to="/podcasts"
            active={this.props.isActive == "/podcasts"}
          >
            PODCASTS
          </StyledLink>
          <Underline active={this.props.isActive == "/podcasts"} />
        </LinkContainer>
        <LinkContainer>
          <StyledLink
            exact
            to="/genres"
            active={this.props.isActive == "/genres"}
          >
            Genres &amp; Moods
          </StyledLink>
          <Underline active={this.props.isActive == "/genres"} />
        </LinkContainer>
        <LinkContainer>
          <StyledLink exact to="/new" active={this.props.isActive == "/new"}>
            New Releases
          </StyledLink>
          <Underline active={this.props.isActive == "/new"} />
        </LinkContainer>
        <LinkContainer>
          <StyledLink
            exact
            to="/discover"
            active={this.props.isActive == "/discover"}
          >
            Discover
          </StyledLink>
          <Underline active={this.props.isActive == "/discover"} />
        </LinkContainer>
      </Container>
    );
  }
}
