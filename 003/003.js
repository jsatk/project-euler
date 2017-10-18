/**
 * The prime factors of 13195 are 5, 7, 13 and 29.
 *
 * What is the largest prime factor of the number 600851475143 ?
 */
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

const factors = getAllFactorsFor(600851475143)
const largetsPrimeFactor = factors.sort((a, b) => b - a)[0]

console.log(largetsPrimeFactor)
