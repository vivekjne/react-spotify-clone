import styled from "styled-components";
import React from "react";

const AlbumContainer = styled.div`
  height: 200px;
  min-width: 180px;
  width: 20%;

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 10px;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(255, 255, 255, 0.2)),
    url(${props =>
      props.image
        ? props.image
        : "https://scene360.com/wp-content/uploads/2014/10/computergraphics-album-covers-2014-15.jpg"});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`;

const AlbumName = styled.p`
  font-size: 24px;
  color: #fff;
  font-weight: 600;
`;

export default props => (
  <AlbumContainer image={props.image}>
    <AlbumName>Album Name</AlbumName>
  </AlbumContainer>
);
