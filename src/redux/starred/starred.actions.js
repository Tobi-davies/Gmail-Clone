import ShowStarredTypes from "./starred.types";

export const addStarred = (star) => ({
  type: ShowStarredTypes.SHOW_STARRED,
  payload: star,
});

export const removeStarred = (unstar) => ({
  typE: ShowStarredTypes.REMOVE_STARRED_MESSAGE,
  payload: unstar,
});
