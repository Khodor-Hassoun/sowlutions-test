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
    let openingIndex = opening.indexOf(cleanArray[i]);
    if (cleanArray[i + j + 1] !== closing[openingIndex]) {
      if (opening.indexOf(cleanArray[i + j + 1]) === -1) {
        return `FIRST FALSE i = ${i}  j = ${j}`;
      } else {
        j += 2;
      }
    }
    // if (i + j === cleanArray.length - 1) {
    //   i++;
    // } else if (cleanArray[i + j] === closing[openingIndex]) {
    // } else {
    //   return false;
    // }
    if (cleanArray[i + j] === closing[openingIndex]) {
      i++;
      j = 1;
      // } else if (j !== cleanArray.length - i) {
      //   j++;
    } else if (j > cleanArray.length) {
      return "SECOND FALSE";
    }
  }
  return true;
}
