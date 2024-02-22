const titleCapsArray = (strArray) => {
  return strArray.map(
    (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  );
};
