/*Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.*/ 

function repeatStr (n, s) {
  
  s.repeat(n)
  
  return  s.repeat(n);
}

//LOOP SOLUTION
function repeatStr (n, s) {
  let str = ''
  for (let i = 0; i < n; i++) {
    str += s;
  }
  return str
}