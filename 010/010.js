'use strict'

/**
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 *
 * Find the sum of all the primes below two million.
 */

// Utilities
const sumOfArray = arr => arr.reduce((sum, n) => sum + n)

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
// const getPrimesUpToN = n => {
//   let i = 1
//   const primes = []

//   while (i < n) {
//     i++
//     if (isPrime(i)) primes.push(i)
//   }

//   return primes
// }

// NOTE: The below recursive method only works as of this writing (2017-11-12)
// by adding the `--harmony-tailcalls` flag when you run `node` as well as
// adding `use strict` to the top of the file or using the `--use_strict`
// flag with node.  I.E. `node --harmony-tailcalls 003.js`
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
const getPrimesUpToN = n => {
  const getPrimesForI = (i = 1, primes = []) => {
    if (i >= n) return primes

    const newI = i + 1
    const updatedPrimes = primes.concat(isPrime(newI) ? [newI] : [])

    return getPrimesForI(newI, updatedPrimes)
  }

  return getPrimesForI()
}

const primes = getPrimesUpToN(2000000)
const sumOfPrimes = sumOfArray(primes)

console.log(sumOfPrimes)
