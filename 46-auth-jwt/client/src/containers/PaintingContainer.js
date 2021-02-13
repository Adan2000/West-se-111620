import React from "react";
import PaintingCard from "../components/PaintingCard";

const API = "http://localhost:3000/api/v1";

class PaintingContainer extends React.Component {
  state = {
    paintings: [],
  };

  componentDidMount() {
    this.fetchPaintings();
  }

  fetchPaintings = () => {
    const token = localStorage.token;
    fetch(API + "/paintings", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => resp.json())
      .then((paintings) => this.setState({ paintings }));
  };

  renderCards = () =>
    this.state.paintings.map((item) => (
      <PaintingCard key={item.id} painting={item} />
    ));

  render() {
    return (
      <div className="PaintingContainer">
        <div>{this.renderCards()}</div>
      </div>
    );
  }
}

export default PaintingContainer;
