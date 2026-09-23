//  In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
 
 // Test is passing 42, -9, then -0.12

function makeNegative(num) {
  
  let result = num * -1
  
  if(result > 0){
    newResult = result *= -1
    return(newResult)
    } else{
      return (result)
    }
} 
// Alternative Solution
function makeNegative(num) {
  return num < 0 ? num : -num;
}