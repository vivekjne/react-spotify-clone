import styled from "styled-components";
import React from "react";
import AlbumCard from "../../components/AlbumCard";
const Container = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export default class AlbumList extends React.Component {
  render() {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let image;

    switch (this.props.path) {
      case "/podcasts":
        image =
          "http://www.flat-e.com/flate5/wp-content/uploads/cover-960x857.jpg";
        break;

      default:
        image = null;
    }

    return (
      <Container>
        {list.map((l, i) => (
          <AlbumCard key={String(i)} image={image} />
        ))}
      </Container>
    );
  }
}
