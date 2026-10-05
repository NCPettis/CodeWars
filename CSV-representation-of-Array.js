/*  
INPUT: 2D ARRAY
    [ 0, 1, 2, 3, 45 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]
OUTPUT: CSV 
 '0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34'); */

 function toCsvText(array) {
  
  const formatted = array.map(row => row.join(',')).join('\n');
  
  return formatted
  
}
/**Breakdown of the Code
• array.map(row => row.join(',')): Iterates through each inner row and converts it into a comma-separated string (e.g., ["0,1,2,3,45", "10,11,12,13,14", ...]).
• .join('\n'): Merges those individual row strings into one final string, inserting a newline character (\n) between them.
Would you like to wrap this code inside a reusable function, or do you need to write a test assertion (like assert.strictEqual) for it? */