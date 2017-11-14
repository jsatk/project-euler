'use strict'

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

// NOTE: The below code works in all modern versions of node as it does not
// require tail call optimization
// More traditional solution not using recursion

// This method returns an array for the first Pythagorean triplet that
// -- when sumed -- equals `sum`.  This method does not tell you if there is
// more than one triplet.

// const getPythagoreanTripletForSum = sum => {
//   // `getC` is the secret-sauce.  We are finding Pythagorean triplets counting
//   // backwards from `sum`, thus putting a cap on our number of loops.
//   const getC = (a, b) => sum - a - b
//   let a = 1
//   let b = a + 1

//   while (a < sum) {
//     while (b < sum && b > a) {
//       const c = getC(a, b)

//       if (c < b) {
//         break
//       }

//       // As soon as we find a Pythagorean triplet we return it since at this
//       // point we know a + b + c === sum.
//       if (isPythagoreanTriplet(a)(b)(c)) {
//         return [a, b, c]
//       }

//       b++
//     }

//     a++
//     b = a + 1
//   }
// }

// NOTE: The below recursive method only works as of this writing (2017-11-12)
// by adding the `--harmony-tailcalls` flag when you run `node` as well as
// adding `use strict` to the top of the file or using the `--use_strict`
// flag with node.  I.E. `node --harmony-tailcalls 003.js`
// Pure functional approach using recursion

const getPythagoreanTripletForSum = (sum, a = 1, b = a + 1) => {
  // `getC` is the secret-sauce.  We are finding Pythagorean triplets counting
  // backwards from `sum`, thus putting a cap on our number of loops.
  const getC = (a, b) => sum - a - b

  // TODO: Re-write the below code using the Y cominator or factorial function
  const foo = (a, b) => {
    const bar = (a, b) => {
      const c = getC(a, b)

      if (c < b) return foo(a + 1, a + 2)

      // As soon as we find a Pythagorean triplet we return it since at this
      // point we know a + b + c === sum.
      if (isPythagoreanTriplet(a)(b)(c)) return [a, b, c]

      return bar(a, b + 1)
    }

    return bar(a + 1, a + 2)
  }

  return foo(a, b)
}

const pythagoreanTripletFor1000 = getPythagoreanTripletForSum(1000)
const productOfPythagoreanTripletFor1000 = productOfArray(pythagoreanTripletFor1000)

console.log(productOfPythagoreanTripletFor1000)
