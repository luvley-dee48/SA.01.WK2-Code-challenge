//the function is named swapCase and it is saved in a file known as swapCase.js
//swapCase.js

function swapCase(str) {
  return str
    .split("")
    .map((char) => {
      //splits the input string into an array of individual characters. // the map function iterates over each character in the array and applies a function to it.
      if (char === char.toUpperCase()) {
        //checks whether the characters are in to upperCase
        return char.toLowerCase(); // return is used to show if it is in uppercase then convert to lowercase
      } else {
        return char.toUpperCase(); // the return means if not to uppercase (lowercase or non-alphabetic) it is converted to uppercase
      }
    })
    .join(""); //joins the modified characters in the array back into a single string forming the final result.
}
const inputStr = "The Quick Brown Fox";
const swappedStr = swapCase(inputStr);
console.log(swappedStr);
