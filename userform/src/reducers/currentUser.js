const currentUser = (state = "", action) => {
  switch (action.type) {
    case "CURRENT_USER": {
      const { payload } = action;
      return {
        payload,
      };
    }
    default:
      return state;
  }
};

export default currentUser;
