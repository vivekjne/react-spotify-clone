import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Route } from "react-router-dom";
const LinkContainer = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #777;
  position: relative;
`;

const LinkImage = styled.img`
  width: 20px;
  height: 20px;
`;

const LinkText = styled.p`
  font-size: 14px;
  margin-left: 10px;
`;

const ActiveIndicator = styled.div`
  width: 5px;
  height: 20px;
  background: lightgreen;
  position: absolute;
  left: -20px;
`;

export default class extends React.Component {
  render() {
    const {
      isActive,
      linkName,
      linkImage,
      linkUrl,
      linkImageInactive
    } = this.props;
    return (
      <Route
        path={linkUrl}
        exact
        children={({ match }) => (
          <LinkContainer
            strict
            exact
            activeStyle={{ color: "#fff" }}
            to={linkUrl}
          >
            <LinkImage src={match ? linkImage : linkImageInactive} />
            <LinkText isActive={isActive}>{linkName}</LinkText>
            {match && <ActiveIndicator />}
          </LinkContainer>
        )}
      />
    );
  }
}
