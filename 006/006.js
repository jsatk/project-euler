/**
 * The sum of the squares of the first ten natural numbers is,
 *
 *   12 + 22 + ... + 102 = 385
 *
 * The square of the sum of the first ten natural numbers is,
 *
 *   (1 + 2 + ... + 10)2 = 552 = 3025
 *
 * Hence the difference between the sum of the squares of the first ten natural
 * numbers and the square of the sum is 3025 − 385 = 2640.
 *
 * Find the difference between the sum of the squares of the first one hundred
 * natural numbers and the square of the sum.
 */

// Utility

// Since our method is exclusive of the higher number we add 1 to it.
// I think this is better for the user as they don't have to remember
// that lower is inclusive but upper is exclusive.  For our purposes
// we don't need a lower bound, but I figured lets write the utility
// method now.  It may pay dividends later.
// JavaScript really needs a `range` method 😑
const getNumberRange = (from, to) => Array.from(Array((to + 1) - from), (_, i) => i + from)
const toThePowerOf = pow => n => Math.pow(n, pow)
const add = (a, b) => a + b

// Problem-specific function(s)
const getSumOfSquares = cap => getNumberRange(1, cap).map(toThePowerOf(2)).reduce(add)
const getSquareOfSum = cap => toThePowerOf(2)(getNumberRange(1, cap).reduce(add))
const getDifference = cap => getSquareOfSum(cap) - getSumOfSquares(cap)

console.log(getDifference(100))
