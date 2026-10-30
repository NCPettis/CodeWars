/*
We want to be able to call 'toJadenCase()' directly on a string like so:
'most trees are blue'.toJadenCase(); // returns 'Most Trees Are Blue'
For that, we need to add a method to the String prototype:
*/

//Parameters - string, no numbers or null things
//Returns - Should be an output of toJadenCase-ed string
//Examples - covered
//Pseudoocode - 



Object.defineProperty(
  String.prototype,
  'toJadenCase',
  { value : 
   function toJadenCase() {
  
     return this.split(' ').map(quote => quote.charAt(0).toUpperCase() + quote.slice(1)).join(' ');
   }
  }
);

/**• Array Mapping: You cannot call .charAt() directly on an array. Instead, you need to use .map() to loop through each individual word inside the array, capitalize its first letter (word.charAt(0).toUpperCase()), and glue the rest of the word back onto it (word.slice(1)).
 * • Joining: Finally, you need .join(" ") to turn that array of capitalized words back into a single space-separated string.

 */