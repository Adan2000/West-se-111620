import React from "react";
import { connect } from "react-redux";
import { increaseVote, decreaseVote } from "../redux/actions/puppiesActions";

const PuppyCard = ({ puppy, increaseVote, decreaseVote }) => {
  return (
    <div className="card">
      <h2>Name: {puppy.name}</h2>
      <p>Votes: {puppy.votes}</p>
      <img src={puppy.image} alt={puppy.name}></img>
      <br />
      <button
        onClick={() => {
          increaseVote(puppy.id);
        }}
      >
        UpVote
      </button>
      <button
        onClick={() => {
          decreaseVote(puppy.id);
        }}
      >
        DownVote
      </button>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increaseVote: (id) => dispatch(increaseVote(id)),
//     decreaseVote: (id) => dispatch(decreaseVote(id)),
//   };
// };

// export default connect(null, mapDispatchToProps)(PuppyCard);
export default connect(null, { increaseVote, decreaseVote })(PuppyCard);
