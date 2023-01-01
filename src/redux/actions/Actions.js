export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};

// DETETE ITEAM
export const DELETE = (id) => {
  return {
    type: "REMOVE_CART",
    payload: id,
  };
};

// DETETE INDIVIDUAL ITEAM
export const REMOVE = (item) => {
  return {
    type: "REMOVE_ONE",
    payload: item,
  };
};
