import React from "react";

const PaintingCard = ({ painting }) => {
  return (
    <div className="card">
      <h4>{painting.title}</h4>
      <img src={painting.image} alt="painting" />
    </div>
  );
};

export default PaintingCard;
