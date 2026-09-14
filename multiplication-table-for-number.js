// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

function multiTable(number) {
  
  let newNumber = ""
  
  for(let i = 1; i <= 10; i++ ){
   newNumber += `${i} * ${number} = ${number * i}`;
   if (i<10) {
     newNumber += "\n"
   }
  }return newNumber
}

//  This works because of the empty string declared at the beginning. And newNumber needed the \n added to the string