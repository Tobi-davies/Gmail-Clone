import { createSelector } from "reselect";

const selectStarred = (state) => state.starred;

export const selectStarredList = createSelector(
  [selectStarred],
  (star) => star.starredUpdate
);

// export const selectNomineesCount = createSelector(
//   [selectNomineesList],
//   (list) =>
//     list.reduce(
//       (accumulatedQuantity, listItem) =>
//         accumulatedQuantity + listItem.quantity,
//       0
//     )
// );
