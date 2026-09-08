// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
  return str.split('').reverse().join('');
}

// .split(''): Splits the string into an array of individual characters
// .reverse(): Reverses the order of the elements in that array in place
// .join(''): Joins all elements of the array back into a single string