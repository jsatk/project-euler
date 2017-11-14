'use strict'

/**
 * 2520 is the smallest number that can be divided by each of the numbers from
 * 1 to 10 without any remainder.
 *
 * What is the smallest positive number that is evenly divisible by all of the
 * numbers from 1 to 20?
 */

// Utility

// Since our method is exclusive of the higher number we add 1 to it.
// I think this is better for the user as they don't have to remember
// that lower is inclusive but upper is exclusive.  For our purposes
// we don't need a lower bound, but I figured lets write the utility
// method now.  It may pay dividends later.
// JavaScript really needs a `range` method 😑
const getNumberRange = (from, to) => Array.from(Array((to + 1) - from), (_, i) => i + from)
const isDivisibleBy = n => i => n % i === 0
const isDivisibleByAllInRange = range => n => range.every(isDivisibleBy(n))

// Problem-specific function(s)

// NOTE: The below code works in all modern versions of node as it does not
// More traditional solution not using recursion
// const getSmallestDivisibleByAllInRange = (from, to) => {
//   let n = to

//   const divisibleBy1Through20 = isDivisibleByAllInRange(getNumberRange(from, to))

//   while (divisibleBy1Through20(n) === false) {
//     n += to
//   }

//   return n
// }

// NOTE: The below recursive method only works as of this writing (2017-11-12)
// by adding the `--harmony-tailcalls` flag when you run `node` as well as
// adding `use strict` to the top of the file or using the `--use_strict`
// flag with node.  I.E. `node --harmony-tailcalls 005.js`
// Pure functional approach using recursion
const getSmallestDivisibleByAllInRange = (from, to) => {
  const divisibleBy1Through20 = isDivisibleByAllInRange(getNumberRange(from, to))

  const getDivisibleBy1Through20 = n =>
    divisibleBy1Through20(n) ? n : getDivisibleBy1Through20(n + to)

  return getDivisibleBy1Through20(to)
}

console.log(getSmallestDivisibleByAllInRange(1, 20))
