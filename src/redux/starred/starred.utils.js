export const addStarToList = (starList, starToAdd) => {
  const existingList = starList.find((star) => star.id === starToAdd.id);

  if (existingList) {
    return starList.map((star) => (star.id === starToAdd.id ? star : star));
  }

  return [...starList, { ...starToAdd, quantity: 1 }];
};

export const removeStarredFromList = (starList, starToRemove) => {
  const existingList = starList.find((star) => star.id === starToRemove.id);

  if (existingList) {
    return starList.filter((star) => star.id !== starToRemove.id);
  }

  return starList;
};
