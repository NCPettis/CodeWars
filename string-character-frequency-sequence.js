/*Your task is to return an output string that translates an input string s by replacing each character in s with a number representing the number of times that character occurs in s and separating each number with the sep character(s). */
/*"hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
"19999999"   , ":" --> "1:7:7:7:7:7:7:7"
"^^^**$"     , "x" --> "3x3x3x2x2x1" */

function freqSeq(str, sep) {
  
  const counts = {};
  
  for (const c of str) counts[c] = (counts[c] || 0) + 1;
 
  return [...str].map(c => counts[c]).join(sep);

}

//ADDITIONAL SOLUTION
function freqSeq(str, sep) {
  return str.split('').map((v, i, arr) => arr.filter(vi => vi === v).length).join(sep);
}

//ADDITIONAL SOLUTION
const freqSeq = (s, sep) => s.split("").map(i => s.split(i).length - 1).join(sep)