import React from "react";
import Puppies from "./Puppies";

class MainContainer extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {};
  // }

  // increaseVote = (puppyID) => {
  //   this.setState({
  //     puppies: {
  //       ...this.state.puppies,
  //       [puppyID]: {
  //         ...this.state.puppies[puppyID],
  //         votes: this.state.puppies[puppyID].votes + 1,
  //       },
  //     },
  //   });
  // };

  // decreaseVote = (puppyID) => {
  //   this.setState({
  //     puppies: {
  //       ...this.state.puppies,
  //       [puppyID]: {
  //         ...this.state.puppies[puppyID],
  //         votes: this.state.puppies[puppyID].votes - 1,
  //       },
  //     },
  //   });
  // };

  render() {
    return (
      <div>
        <Puppies />
        <h1>THANKS FOR VOTING</h1>
      </div>
    );
  }
}

export default MainContainer;
