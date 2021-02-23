import puppyOne from "../../assets/chow-chow-puppy.jpg";
import puppyTwo from "../../assets/english-cream-golden-retriever.jpg";
import puppyThree from "../../assets/scoob.jpg";

const initialState = {
  puppies: {
    1: {
      id: 1,
      name: "Fluffy",
      votes: 0,
      image: puppyOne,
    },
    2: {
      id: 2,
      name: "Air Bud",
      votes: 0,
      image: puppyTwo,
    },
    3: {
      id: 3,
      name: "Scoobie Doo?",
      votes: 0,
      image: puppyThree,
    },
  },
};

const puppiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_VOTE": {
      return {
        ...state,
        puppies: {
          ...state.puppies,
          [action.payload]: {
            ...state.puppies[action.payload],
            votes: state.puppies[action.payload].votes + 1,
          },
        },
      };
    }
    case "DECREASE_VOTE": {
      return {
        ...state,
        puppies: {
          ...state.puppies,
          [action.payload]: {
            ...state.puppies[action.payload],
            votes: state.puppies[action.payload].votes - 1,
          },
        },
      };
    }
    default:
      return state;
  }
};

export default puppiesReducer;
