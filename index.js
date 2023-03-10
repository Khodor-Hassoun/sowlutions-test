const hashObj = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
};

const countArray = [];
const sortedArray = [];

// Array determined has elements exclusively between 0 and 5

function countAndSort(array) {
  for (elem of array) {
    hashObj[elem] += 1;
  }
  Object.values(hashObj).forEach((val) => countArray.push(val));
  //   return countArray;

  for (let i = 0; i < countArray.length; i++) {
    let k = 0;
    while (k < countArray[i]) {
      sortedArray.push(i);
      k++;
    }
  }
  return { countArray, sortedArray };
}
