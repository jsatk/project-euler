/**
 * Each new term in the Fibonacci sequence is generated by adding the previous
 * two terms. By starting with 1 and 2, the first 10 terms will be:
 *
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 *
 * By considering the terms in the Fibonacci sequence whose values do not exceed
 * four million, find the sum of the even-valued terms.
 */

// Utility
const sumOfArr = arr => arr.reduce((sum, n) => sum + n, 0)
const sumEndsOfArr = arr => arr[arr.length - 1] + arr[arr.length - 2]
const throwIfMissing = (message = 'Missing parameter') => {
  throw new Error(message)
}

// Predicates
const isMultipleOfN = n => num => num % n === 0
const isEven = isMultipleOfN(2)

// Problem-specific functions
// Intentionally not setting a limit.  I'd rather give user feedback via explicit error.
const getFibonacciBelowN = (limit = throwIfMissing('You must specify a limit')) => {
  const fibonacci = [1, 2]

  // I hate `while` loops, but since we need to check if fibonacci number is
  // greater than 4,000,000 each time this seems to be the best solution.
  while (fibonacci[fibonacci.length - 1] < limit) {
    fibonacci.push(sumEndsOfArr(fibonacci))
  }

  return fibonacci
}

const fibonacci = getFibonacciBelowN(4e+6)
const evens = fibonacci.filter(isEven)
const sumOfEvens = sumOfArr(evens)

console.log(sumOfEvens)