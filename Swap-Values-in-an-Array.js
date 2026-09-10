// I would like to be able to pass an array with two elements to my function to swap the values. However it appears that the values aren't changing.

// Can you figure out what's wrong here?
function swapValues(array) {
 [0 , 1]
  
  const temp = array[0]; //the value of temp is 0
   array[0] = array[1]; //array index 0 is now 1
   array[1] = temp;
 console.log(array)
}

// Secondary Solution

function swapValues(array){
  [array [0], array[1]] = [array[1], array[0]]
}