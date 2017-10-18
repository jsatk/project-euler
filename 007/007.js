/**
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see
 * that the 6th prime is 13.
 *
 * What is the 10 001st prime number?
 */

// Predicates
const isPrime = n => {
  const sqrt = Math.sqrt(n)

  for (let i = 2; i <= sqrt; i++) {
    if (n % i === 0) return false
  }

  return n !== 1
}

// Problem-specific function(s)
const getPrimeAtNPlace = n => {
  let countOfPrimes = 0
  let i = 0

  while (countOfPrimes < n) {
    i++
    if (isPrime(i)) countOfPrimes++
  }

  return i
}

console.log(getPrimeAtNPlace(10001))
