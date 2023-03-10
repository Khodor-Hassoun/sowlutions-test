function isValidBracketSequence(str) {
  const parans = ["(", ")"];
  const brackets = ["[", "]"];
  const curly = ["{", "}"];

  const strArray = str.split("");
  //   Edge cases
  if (strArray.length === 0 || strArray.length === 1) {
    return false;
  }
  if (
    strArray[0] === parans[1] ||
    strArray[0] === brackets[1] ||
    strArray[0] === curly[1]
  ) {
    return "out of order";
  }
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] === parans[0] || brackets[0] || strArray[i] === curly[0]) {
    }
  }
}
