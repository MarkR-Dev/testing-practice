function reverseString(string) {
  if (typeof string !== "string") {
    throw new Error("You must provide a string");
  }
  return string.split("").reverse().join("");
}

export default reverseString;
