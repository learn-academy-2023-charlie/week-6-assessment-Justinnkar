// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("createSentence", () => 
{
  const hitchhikersCharacters = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]

it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
  expect(createSentence(hitchhikersCharacters)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
})
})

/*
 FAIL  ./code-challenges.test.js
  createSentence
    ✕ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (1 ms)

  ● createSentence › takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

    ReferenceError: createSentence is not defined
*/

// b) Create the function that makes the test pass.

/*
PseudoCode:
Input:  An array of objects
Ouput:  An array of strings
Iterate through each object's name and occupation 
Capitalize the first letter of the name string
concatenate the string of "is" between the string of name and the string of occupation
*/

const createSentence = (array) => {
    return array.map(object => `${object.name.split(" ").map(name => name.charAt(0).toUpperCase() + name.slice(1)).join(" ")} is ${object.occupation}.`) /* string interpolation begins, iterates through the object, splits the words into an array of substrings, iterates through the substrings capitalizing the first character of each word and adds the remaining part of the word, joins the strings back together. */
}

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("remainder", () => 
{
  const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
  const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]

it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
  expect(remainder(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
  expect(remainder(hodgepodge2)).toEqual([ 2, 1, -1 ])
})
})

/*
 FAIL  ./code-challenges.test.js
  createSentence
    ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (2 ms)
  remainder
    ✕ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

  ● remainder › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

    ReferenceError: remainder is not defined
*/

// b) Create the function that makes the test pass.

const remainder = (array) => {
  // iterates over the array and filter out non-numeric values
  const numbers = array.filter(element => typeof element === 'number')
  // iterates over the numbers array and computes the remainder of each number when divided by 3
  const remainders = numbers.map(number => number % 3)
  // returns the array of remainders
  return remainders
}

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("sumCubedNumbers", () => 
{
  const cubeAndSum1 = [2, 3, 4]
  const cubeAndSum2 = [0, 5, 10]

it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
  expect(sumCubedNumbers(cubeAndSum1)).toEqual(99)
  expect(sumCubedNumbers(cubeAndSum2)).toEqual(1125)
})
})

/*
 FAIL  ./code-challenges.test.js
  createSentence
    ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (2 ms)
  remainder
    ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3. (1 ms)
  sumOfNumbersCubed
    ✕ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

  ● sumOfNumbersCubed › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

    ReferenceError: sumOfNumbersCubed is not defined
*/

// b) Create the function that makes the test pass.

const sumCubedNumbers = numbers => numbers.reduce((sum, number) => sum + Math.pow(number, 3), 0);
// reduce calculates the sum of the cubed numbers. 


