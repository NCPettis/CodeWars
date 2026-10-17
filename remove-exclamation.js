/**Write function RemoveExclamationMarks which removes all exclamation marks from a given string. */

function removeExclamationMarks(s) {
  return s.replaceAll('!', '');
}

//ADDITONAL SOLUTION WITH SPLIT

function removeExclamationMarks(s) {
  return s.split('!').join('');
}