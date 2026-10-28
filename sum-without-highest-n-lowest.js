/**Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation. */

// sort
// pop
// shift

function sumArray(array) {
  
 newArr = array.sort((a , b) => a - b).pop().shift()
  
}console.log(newArr)

//Pop and Shift array.sort modifies the original array in place, and .pop and .shift are methods that must be invoked with parentheses (). Furthermore, .pop() returns the removed element rather than the array, meaning you cannot chain them together directly like pop().shift().

function sumArray(array) {
  
    if (!array || array.length <= 2) {
    return 0;
  }
  const sorted = [...array].sort((a, b) => a - b);
  sorted.pop();
  sorted.shift();

  return sorted.reduce((sum, num) => sum + num, 0);

}