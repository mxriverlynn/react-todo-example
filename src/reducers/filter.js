const filter = (state = "ALL", action) => {
  switch (action.type) {
    case "FILTER_COMPLETE":
      return "COMPLETE";
    case "FILTER_INCOMPLETE":
      return "INCOMPLETE";
    default:
      return "ALL";
  }
}

export default filter;
