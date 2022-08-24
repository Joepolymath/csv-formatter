/**
 * @param {Array} arr
 */
const mergeSort = arr => {
  // return the array if length is 1
  if (arr.length == 1) {
    return arr;
  }

  // ceil the half, for odd left side will always 1+
  let half = Math.ceil(arr.length / 2);

  // slice the array
  let leftSide = arr.slice(0, half);
  let rightSide = arr.slice(half, arr.length);

  // if length is greater than 1
  // divide it again
  if (leftSide.length > 1) {
    leftSide = mergeSort(leftSide);
  }

  if (rightSide.length > 1) {
    rightSide = mergeSort(rightSide);
  }

  // return the sorted merge result
  return compareAndMerge(leftSide, rightSide);
};

/**
 * compareAndMerge - Compare the left and the right side and
 * return the merged sorted array
 * @param {Array} leftSide - left side of the array
 * @param {Array} rightSide - right side of the array
 */
const compareAndMerge = (leftSide, rightSide) => {
  let sorted = [];

  // create 2 indexes
  // i for leftSide
  // j for rightSide
  let i = 0;
  let j = 0;

  // compare rightSide with leftSide
  // leftSide is the reference
  while (i < leftSide.length) {
    // compare leftSide at index i to the rightSide at index j
    while (j < rightSide.length) {
      // if leftSide is lesser than rightSide than push the leftSide[i] to sorted array
      if (leftSide[i] < rightSide[j]) {
        sorted.push(leftSide[i]);

        // increment the leftSide index
        // as value at this is pushed into the sorted array
        i++;
      } else {
        if (i >= leftSide.length) {
          sorted = sorted.concat(rightSide.slice(j, rightSide.length));

          // break the loop
          break;
        }

        // if rightSide is lesser than leftSide at index j and i resp
        // push the rightSide value to the sorted array
        sorted.push(rightSide[j]);

        // increment the rightSide index
        // as value at this is pushed into the sorted array
        j++;
      }
    }

    // check if all the values at rightSide is pushed into the sorted Array
    // or if all the values at rightSide is sorted
    if (j >= rightSide.length) {
      sorted = sorted.concat(leftSide.slice(i, leftSide.length));
      break;
    }
  }


  // return the sorted merged array
  return sorted;
};

module.exports = mergeSort;