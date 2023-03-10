function isValidBracketSequence(str) {
  const opening = ["(", "[", "{"];
  const closing = [")", "]", "}"];
  let counter = 0;
  let i = 0;
  let j = 0;

  let strArray = str.split("");
  const cleanArray = [];
  //   Edge cases
  if (strArray.length === 0 || strArray.length === 1) {
    return false;
  }
  // Filter characters that are not brackets
  for (let i = 0; i < strArray.length - counter; i++) {
    if (
      opening.indexOf(strArray[i]) >= 0 ||
      closing.indexOf(strArray[i]) >= 0
    ) {
      cleanArray.push(strArray[i]);
    }
  }
  //   With clean array see if closing array starts first
  if (closing.indexOf(cleanArray[0]) === 0) {
    return false;
  }

  while (i < cleanArray.length - 1) {
    // get the index of the opening bracket in opening array
    let openingIndex = opening.indexOf(cleanArray[i]);

    // I only worry about opening and if they have a closing or not, it is safe to say that a closing bracket is handled by an opening bracket case
    if (openingIndex === -1) {
      i++;
      continue;
    }

    // i is the element to be tested in given array, j is how many characters far from the closing bracket is
    if (cleanArray[i + j + 1] !== closing[openingIndex]) {
      if (opening.indexOf(cleanArray[i + j]) === -1) {
        return `FIRST FALSE i = ${i}  j = ${j} opening index = ${openingIndex}`;
      } else {
        // if the opening bracket direct neighbor is not its closing, but is also an opening then add j by 2 (the opening and closing)
        j += 2;
      }
    }

    // the bracket has closing go to next
    if (cleanArray[i + j + 1] === closing[openingIndex]) {
      i++;
      j = 0;
    } else if (j > cleanArray.length) {
      return "SECOND FALSE";
    }
  }
  return true;
}
