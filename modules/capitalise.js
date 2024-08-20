function capitalise(string) {
  if (typeof string !== "string") {
    throw new Error("You must provide a string");
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default capitalise;
