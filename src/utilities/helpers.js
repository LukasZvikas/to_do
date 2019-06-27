export const removeItemFromArr = (arr, ID) => {
  return arr.filter(item => item.ID !== ID);
};
