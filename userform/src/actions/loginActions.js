export const loggedinUser = (username) => {
  return {
    type: "CURRENT_USER",
    username,
  };
};
