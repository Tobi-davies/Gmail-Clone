import ShowOutboxTypes from "./outbox.types";
// import {addMessageToList} from './outbox.utils'

const INITIAL_STATE = {
  sentMessages: [],
};

const outboxReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShowOutboxTypes.SHOW_OUTBOX:
      return {
        ...state,
        sentMessages: [...state.sentMessages, action.payload],
      };

    default:
      return state;
  }
};

export default outboxReducer;
