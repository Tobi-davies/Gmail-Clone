import { createSelector } from "reselect";

const selectStarred = (state) => state.starredUpdate;

export const selectStarredList = createSelector(
  [selectStarred],
  (star) => star.list
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
