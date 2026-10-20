/**Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this: 
[
  "  *  ",
  " *** ", 
  "*****"
]*/

function towerBuilder(nFloors) {
  let tower = [];
  for (let i = 1; i <= nFloors; i++) {
    let spaces = " ".repeat(nFloors - i);
    let stars = "*".repeat(2 * i - 1);
    tower.push(spaces + stars + spaces);
  }
  return tower;
}

//originally attemed if...else..statements but it doesn't account for the array returning same num of characters on each floor. 

/**
• Total Width: The base of the tower always has a length of 2 * n_floors - 1.
• Stars per Floor: Each floor i (starting at 1) contains 2 * i - 1 stars.
• Spaces per Side: To center the stars, each side receives n_floors - i spaces. 

To center the pyramid, the number of spaces on each side decreases as you go down the tower, while the number of stars increases.

Spaces per Side = Totol Floors - Current Floors*/