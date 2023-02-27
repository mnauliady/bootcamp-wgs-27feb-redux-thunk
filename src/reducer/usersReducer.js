export default (state = [], action) => {
  // reducer fetch user
  switch (action.type) {
    case "FETCH_USER":
      return [...state, action.payload];
    default:
      return state;
  }
};
