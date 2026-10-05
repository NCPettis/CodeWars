/*Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi!!"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi" */

function remove (string) {
 
  let result = string
  
  if (result[result.length - 1] === "!") {
    // remove the last character (= `!`)
    result = result.slice(0, -1);
    return result
  }else{
    return result
  }
}