const { TestScheduler } = require("jest")
const assertEquals = require("./assert-equals")
const assertEqualsArrays = require("./assert-equals")

// describe('assertEquals', () => {
//   describe('when expected and actual are the same string', () => {
//     it('returns without throwing an error', () => {
//       expect(() => assertEquals('abc', 'abc')).not.toThrow()
//     })
//   })

//   describe('when expected and actual are different strings', () => {
//     it.todo('throws an error')
//   })
// })

test("Tests assertEquals() to see if data types are equal!", () => {
  assertEquals("abc", "abc")
  assertEquals(1, 1)
})

test("Tests assertEquals() to see if data types are NOT equal!", () => {
  assertEquals("abcef", "abc")
  assertEquals(1, 2)
})

test("Tests assertEquals() to see if type of data inputs are equal", () => {
  assertEquals(1, "1")
  assertEquals([1], 1)
})

test("Tests assertEquals() to check if arrays are the same!", () => {
  const expect = ["a", "b", "c"]
  const actual = ["a", "b", "c"]

  assertEquals(expect.length, actual.length)
  assertEquals(expect[1], actual[1])
})

test("Tests assertEquals() for length of array", () => {
  const expect = ["a", "b"]
  const actual = ["a", "b", "c"]

  assertEquals(expect, actual)
})

test("Tests assertEquals() same elements", () => {
  const expect = ["a", "b"]
  const actual = ["a", "d"]

  assertEquals(expect, actual)
})
