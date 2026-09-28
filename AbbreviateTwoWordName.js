/*Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F */

function abbrevName(name){

 
  const abbrev = name.split(' ').map(initials => initials[0]);//<<Takes the name Same Harris and splits it by the space("") then map gets the 0 index of each word

//   console.log(abbrev)
  result = abbrev.join(".").toUpperCase()//<<<Takes the initials ["S" "H"] and joins them [S.H] then makes sure any initials passed in are upper case

  
  return (result + "") 

}
