// function that accepts two numbers and can generate an array between them
function generateArrayBetween(start, end) {
  const result = []; //used to store the generated numbers
  if (start > end) {
    //when start is greater than the end then it will generate the number in descending order using the loop if
    for (let i = start; i >= end; i--) {
      //for loop iterates from start to down to end (i)by 1 in each iteration
      result.push(i); //i is pushed to the result array
    }
  } else {
    //when the start number is less than or equal to the end
    for (let i = start; i <= end; i++) {
      // start up to end
      result.push(i); //pushes the resulting array
    }
  }
  return result; //generate numbers from the start to end in the correct order
}

console.log(generateArrayBetween(4, 7)); // output 4,5,6,7
console.log(generateArrayBetween(-4, 7)); // output -4,-3,-2,-1,0,1,2,3,4,5,6,7
