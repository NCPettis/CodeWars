// We need a function that can transform a number (integer) into a string.
// What ways of achieving this do you know?
// example - 123  --> "123"

function numberToString(num) {
  result = num.toString()
  
  return result
}

// Other Solution
function numberToString(num) {
  return ''+num;
}