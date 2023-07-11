const currentUser = (state = "", action) => {
  switch (action.type) {
    case "CURRENT_USER": {
      const { username } = action;
      return {
        username,
      };
    }
    default:
      return state;
  }
};

export default currentUser;
