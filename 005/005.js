/**
 * 2520 is the smallest number that can be divided by each of the numbers from
 * 1 to 10 without any remainder.
 *
 * What is the smallest positive number that is evenly divisible by all of the
 * numbers from 1 to 20?
 */

// Utility
//
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
const getSmallestDivisibleByAllInRange = (from, to) => {
  let n = to

  // Currying because computer's like it when you're nice to them.
  const divisibleBy1Through20 = isDivisibleByAllInRange(getNumberRange(from, to))

  while (divisibleBy1Through20(n) === false) {
    n += to
  }

  return n
}

console.log(getSmallestDivisibleByAllInRange(1, 20))
