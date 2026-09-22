// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// highAndLow("1 2 3 4 5"); // return "5 1"
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.



function highAndLow(numbers){

  
 let data = numbers.split(" ")
//  console.log(data)
 
 let min = Number(Math.min(...data))
 let max = Number(Math.max(...data))
//  console.log(min, max)
  
  return (`${max} ${min}`)
 
}