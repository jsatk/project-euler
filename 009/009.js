/**
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 *
 * a^2 + b^2 = c^2
 * For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
 *
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 */

// Utility
const productOfArray = arr => arr.reduce((sum, n) => sum * n)
const toPowerOf = p => n => Math.pow(n, p)
const squared = toPowerOf(2)

// Problem-specific functions
const isPythagoreanTriplet = a => b => c => squared(a) + squared(b) === squared(c)

// This method returns an array for the first Pythagorean triplet that
// -- when sumed -- equals `sum`.  This method does not tell you if there is
// more than one triplet.
const getPythagoreanTripletForSum = sum => {
  // `getC` is the secret-sauce.  We are finding Pythagorean triplets counting
  // backwards from `sum`, thus putting a cap on our number of loops.
  const getC = (a, b) => sum - a - b
  let a = 1
  let b = a + 1

  while (a < sum) {
    while (b < sum && b > a) {
      const c = getC(a, b)

      if (c < b) {
        break
      }

      // As soon as we find a Pythagorean triplet we return it since at this
      // point we know a + b + c === sum.
      if (isPythagoreanTriplet(a)(b)(c)) {
        return [a, b, c]
      }

      b++
    }

    a++
    b = a + 1
  }
}

const pythagoreanTripletFor1000 = getPythagoreanTripletForSum(1000)
const productOfPythagoreanTripletFor1000 = productOfArray(pythagoreanTripletFor1000)

console.log(productOfPythagoreanTripletFor1000)
