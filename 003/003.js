'use strict'

/**
 * The prime factors of 13195 are 5, 7, 13 and 29.
 *
 * What is the largest prime factor of the number 600851475143 ?
 */

// NOTE: The below code works in all modern versions of node as it does not
// require tail call optimization
// More traditional solution not using recursion
const getAllFactorsFor = n => {
  const factors = []

  // There might be a way to do this that's not O(n^2) but ¯\_(ツ)_/¯
  // I also hate `for` and `while` loops, but I'll live since it's encapsulated
  // in a method here and doesn't leak.
  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      factors.push(i)
      n /= i // Shorthand for remainder = remainder / i
    }
  }

  return factors
}

// NOTE: The below recursive method only works as of this writing (2017-11-12)
// by adding the `--harmony-tailcalls` flag when you run `node` as well as
// adding `use strict` to the top of the file or using the `--use_strict`
// flag with node.  I.E. `node --harmony-tailcalls 003.js`
// Pure functional approach using recursion
// const getAllFactorsFor = (n, i = 2, factors = []) => {
//   if (i > n) return factors
//   const factorsForI = getFactorsForI(i)(n, factors)
//   return getAllFactorsFor(factorsForI.n, i + 1, factorsForI.factors)
// }

// const getFactorsForI = i => {
//   const getFactorsForN = (n, factors) => {
//     if (n % i !== 0) return {factors, n}
//     const remainder = n /= i // Shorthand for remainder = remainder / i
//     return getFactorsForN(remainder, factors.concat([i]))
//   }

//   return getFactorsForN
// }

const factors = getAllFactorsFor(600851475143)
const largetsPrimeFactor = factors.sort((a, b) => b - a)[0]

console.log(largetsPrimeFactor)
