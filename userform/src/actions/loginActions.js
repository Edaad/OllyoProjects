export const loggedinUser = (payload) => {
  return {
    type: "CURRENT_USER",
    payload,
  };
};
