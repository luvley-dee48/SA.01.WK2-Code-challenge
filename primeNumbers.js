//finding prime numbers in an array.
function findPrime(numbers) {
  // function takes an array of numbers as input.
  return numbers.filter((num) => isPrime(num)); // filter method is used on the numbers array will take a caallback function as an argument.
  //   So it will check whether the numbers in the array are prime by calling isPrime.
}

function isPrime(num) {
  if (num <= 1) return false; // is not prime then return false
  if (num <= 3) return true; // it is a prime number hence return 2 or 3
  if (num % 2 === 0 || num % 3 === 0) return false; // if a number is divisible by 2 or 3 then it is not prime

  let i = 5; //declares a variable with a value of 5
  while (i * i <= num) {
    //a while loop that continues as long as the condition is true
    if (num % i === 0 || num % (i + 2) === 0) return false; //checks whether the num is divisible by i or i+2
    i += 6; // for each loop iteration
  }
  return true;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primes = findPrime(numbers);
console.log(primes);
