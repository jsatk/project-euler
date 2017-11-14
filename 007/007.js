'use strict'

/**
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see
 * that the 6th prime is 13.
 *
 * What is the 10 001st prime number?
 */

// NOTE: The below code works in all modern versions of node as it does not
// require tail call optimization
// More traditional solution not using recursion

// Predicates
// const isPrime = n => {
//   const sqrt = Math.sqrt(n)

//   for (let i = 2; i <= sqrt; i++) {
//     if (n % i === 0) return false
//   }

//   return n !== 1
// }

// Problem-specific function(s)
// const getPrimeAtNPlace = n => {
//   let countOfPrimes = 0
//   let i = 0

//   while (countOfPrimes < n) {
//     i++
//     if (isPrime(i)) countOfPrimes++
//   }

//   return i
// }

// NOTE: The below recursive method(s) only works as of this writing (2017-11-12)
// by adding the `--harmony-tailcalls` flag when you run `node` as well as
// adding `use strict` to the top of the file or using the `--use_strict`
// flag with node.  I.E. `node --harmony-tailcalls 007.js`
// Pure functional approach using recursion

// Predicates
const isPrime = n => {
  const sqrt = Math.sqrt(n)

  const isNPrime = (i = 2) => {
    if (i > sqrt) return n !== 1
    if (n % i === 0) return false

    return isNPrime(i + 1)
  }

  return isNPrime()
}

// Problem-specific function(s)
const getPrimeAtNPlace = n  => {
  const getPrimeForNPlace = (countOfPrimes = 0, i = 0) => {
    if (countOfPrimes >= n) return i

    const newI = i + 1
    const newCountOfPrimes = isPrime(newI) ? countOfPrimes + 1 : countOfPrimes

    return getPrimeForNPlace(newCountOfPrimes, newI)
  }

  return getPrimeForNPlace()
}

console.log(getPrimeAtNPlace(10001))
