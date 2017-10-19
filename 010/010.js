/**
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 *
 * Find the sum of all the primes below two million.
 */

// Predicates
const isPrime = n => {
  const sqrt = Math.sqrt(n)

  for (let i = 2; i <= sqrt; i++) {
    if (n % i === 0) return false
  }

  return n !== 1
}

// Utilities
const sumOfArray = arr => arr.reduce((sum, n) => sum + n)

// Problem-specific function(s)
const getPrimesUpToN = n => {
  let i = 1
  const primes = []

  while (i < n) {
    i++
    if (isPrime(i)) primes.push(i)
  }

  return primes
}

const primes = getPrimesUpToN(2000000)
const sumOfPrimes = sumOfArray(primes)

console.log(sumOfPrimes)
