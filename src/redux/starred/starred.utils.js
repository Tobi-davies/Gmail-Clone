export const addNomineeToList = (nomineesList, nomineeToAdd) => {
  const existingNominee = nomineesList.find(
    (nominee) => nominee.imdbID === nomineeToAdd.imdbID
  );

  if (existingNominee) {
    return nomineesList.map((nominee) =>
      nominee.imdbID === nomineeToAdd.imdbID ? nominee : nominee
    );
  }

  return [...nomineesList, { ...nomineeToAdd, quantity: 1 }];
};
