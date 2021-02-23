import React from "react";
import PuppyCard from "./PuppyCard";
import { connect } from "react-redux";

const Puppies = (props) => {
  console.log(props);
  const mapPuppies = () => {
    let puppiesArray = Object.values(props.puppies);
    let puppiesCards = puppiesArray.map((puppy) => {
      return (
        <PuppyCard
          key={puppy.id}
          increaseVote={props.increaseVote}
          decreaseVote={props.decreaseVote}
          puppy={puppy}
        />
      );
    });
    return puppiesCards;
  };
  return (
    <div>
      <div className="container">{mapPuppies()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    puppies: state.puppiesReducer.puppies,
  };
};

export default connect(mapStateToProps)(Puppies);
