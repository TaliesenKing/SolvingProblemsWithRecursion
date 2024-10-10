/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/


function range(start, end) {
  //lets rule out our edge cases
  if (end <= start) {
    return [];
  }
  //lets add the starting parameter
  let newArr = [start];
  //now lets add our recursive case
  return newArr.concat(range(start + 1, end));
  //this will return our array concatenated with the function being called again this time with 1 added to the start parameter every time. 
  }

console.log(range(1, 5)); // [1, 2, 3, 4])
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
