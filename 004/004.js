/**
 * A palindromic number reads the same both ways. The largest palindrome made
 * from the product of two 2-digit numbers is 9009 = 91 × 99.
 *
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

// Utility
//
// Since our method is exclusive of the highter number we add 1 to it.
// I think this is better for the user as they don't have to remember
// that lower is inclusive but upper is exclusive.
const getNumberRange = (lowerNum, higherNum) =>
  Array.from(Array((higherNum + 1) - lowerNum).keys(), (_, i) => i + lowerNum)
const reverseString = str => str.split('').reverse().join('')
const isPalindrome = str => str === reverseString(str)
const getProducts = arr => arr.reduce((sum, n1) => sum.concat(arr.map(n2 => n1 * n2)), [])

// Problem-specific functions
const allThreeDigitNumbers = getNumberRange(100, 999)
const products = getProducts(allThreeDigitNumbers)
const palindromes = products.filter(n => isPalindrome(`${n}`))
const largestPalindrome = palindromes.sort((n1, n2) => n2 - n1)[0] // Sorts highest to lowest

console.log(largestPalindrome)
