import ShowStarredTypes from "./starred.types";

const INITIAL_STATE = {
  starredUpdate: null,
};

const starredReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShowStarredTypes.SHOW_STARRED:
      return {
        ...state,
        starredUpdate: action.payload,
      };

    default:
      return state;
  }
};

export default starredReducer;
