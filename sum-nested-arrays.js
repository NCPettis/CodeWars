/**You are given an array of values.

Sum every number value in the array, and any nested arrays (to any depth).

Ignore all other types of values.

If there are no numbers at all in the array, take the empty sum to be zero.

 */


function arraySum(arr) {
  return arr.reduce((acc, value) => {
    if (Array.isArray(value)) {
      return acc + arraySum(value);
    } else if (typeof value === 'number' && !isNaN(value)) {
      return acc + value;
    }
    return acc;
  }, 0);
}

//The Array.isArray() static method determines whether the passed value is an Array.

//ADDITIONAL SOLUTION - LOOP
function arraySum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      sum += arraySum(arr[i]);
    } else if (typeof arr[i] === 'number') {
      sum += arr[i];
    }
  }
  return sum;
}