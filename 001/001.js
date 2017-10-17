/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 *
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

// Utility
const getNumbersBelowN = n => Array.from(Array(n).keys()) // This excludes `n`
const sumOfArr = arr => arr.reduce((sum, n) => sum + n, 0)

// Predicates
const isMultipleOf = n => num => num % n === 0
const isMultipleOf3Or5 = num => isMultipleOf(3)(num) || isMultipleOf(5)(num)

// Problem-specific functions
const getNaturalNumbersBelowN = n => getNumbersBelowN(n).slice(1) // Drops the 0
const naturalNumbersBelow1000 = getNaturalNumbersBelowN(1000)
const multiplesOf3Or5 = naturalNumbersBelow1000.filter(isMultipleOf3Or5)
const sumOfMultiplesOf3Or5 = sumOfArr(multiplesOf3Or5)

console.log(sumOfMultiplesOf3Or5)
