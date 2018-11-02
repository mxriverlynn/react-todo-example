const filter = (state = "ALL", action) => {
  switch (action.type) {
    case "FILTER_ALL":
      return "ALL";
    case "FILTER_COMPLETE":
      return "COMPLETE";
    case "FILTER_INCOMPLETE":
      return "INCOMPLETE";
    default:
      return state;
  }
}

export default filter;
