function assertEquals(expect, actual) {
  if (actual === expect) {
    const defaultMessage = `No Error: Expected ${expect} and received ${actual}`
    console.info("Pass: " + defaultMessage)
    return
  }

  if (typeof actual !== typeof expect) {
    const defaultMessage = `Expected type of ${typeof expect} but found type of ${typeof actual}`
    console.error("Fail: " + defaultMessage)
    return
  }
  if (
    Array.isArray(actual) &&
    Array.isArray(expect) === true &&
    expect.length !== actual.length
  ) {
    const defaultMessage = `Expected array length ${expect.length} but found ${actual.length}`
    console.error("Fail: " + defaultMessage)
    return
  }

  if (
    Array.isArray(actual) &&
    Array.isArray(expect) === true &&
    expect.length === actual.length
  ) {
    for (let i = 0; i < expect.length; i++) {
      if (expect[i] !== actual[i]) {
        const defaultMessage = `Expected ${expect[i]} but found ${actual[i]} instead`
        console.error("Fail: " + defaultMessage)
        return
      }
    }
  }

  if (actual !== expect) {
    const defaultMessage = `Expected ${expect} but found ${actual} instead`
    console.error("Fail: " + defaultMessage)
    return
  }
}

module.exports = assertEquals
