/**
 * 🛺 Auto Rickshaw Fare Calculator - Number & Math
 *
 * Bhaiyya ji ka auto rickshaw hai. Meter se fare calculate hota hai.
 * Different math operations chahiye — round karna, min/max nikalna,
 * strings se numbers parse karna. Tu Bhaiyya ji ka meter software bana!
 *
 * Methods to explore: parseFloat(), parseInt(), .toFixed(),
 *   Math.ceil(), Math.max(), Math.min(), Math.abs()
 *
 * Functions:
 *
 *   1. parseFare(fareString)
 *      - Customer bolte hain "152.50" as string — parseFloat() se number banao
 *      - Agar result NaN hai ya fareString string nahi hai, return -1
 *      - Example: parseFare("152.50") => 152.5
 *      - Example: parseFare("abc") => -1
 *
 *   2. roundFare(amount, decimalPlaces)
 *      - .toFixed(decimalPlaces) se fare round karo
 *      - Result STRING return hota hai (toFixed returns string)
 *      - Agar amount number nahi hai ya decimalPlaces non-negative integer nahi hai, return ""
 *      - Example: roundFare(152.567, 2) => "152.57"
 *      - Example: roundFare(152.567, 0) => "153"
 *
 *   3. calculateSurge(baseFare, surgeMultiplier)
 *      - baseFare * surgeMultiplier karo
 *      - Math.ceil() se always round UP (auto wale ko paisa milna chahiye!)
 *      - Agar baseFare ya surgeMultiplier positive number nahi hai, return 0
 *      - Example: calculateSurge(100, 1.5) => 150
 *      - Example: calculateSurge(73, 1.8) => 132 (Math.ceil(131.4))
 *
 *   4. findCheapestAndCostliest(...fares)
 *      - Rest parameter (...) se variable number of fares le
 *      - Math.min() aur Math.max() se cheapest aur costliest dhundho
 *      - Non-number values filter out karo
 *      - Agar koi valid number nahi mila, return null
 *      - Return: { cheapest, costliest }
 *      - Example: findCheapestAndCostliest(150, 80, 200) => { cheapest: 80, costliest: 200 }
 *
 *   5. getDistanceDifference(from, to)
 *      - parseInt() se string km markers ko numbers mein convert karo
 *      - Math.abs() se absolute difference nikalo (direction matter nahi karta)
 *      - Agar parse ke baad koi NaN hai, return -1
 *      - Example: getDistanceDifference(5, 12) => 7
 *      - Example: getDistanceDifference("15", "8") => 7
 *
 * @example
 *   parseFare("152.50")                    // => 152.5
 *   roundFare(152.567, 2)                  // => "152.57"
 *   findCheapestAndCostliest(150, 80, 200) // => { cheapest: 80, costliest: 200 }
 */
export function parseFare(fareString) {
  // Your code here

  if (typeof fareString !== "string") {
    return -1
  }

  const floatNum = parseFloat(fareString)

  if (Number.isNaN(floatNum)) {
    return -1
  }

  return floatNum


}

export function roundFare(amount, decimalPlaces) {
  // Your code here

  if (typeof amount !== "number" || typeof decimalPlaces !== "number" || decimalPlaces < 0 || !Number.isInteger(decimalPlaces)) {
    return ""
  }

  const roundUpValue = amount.toFixed(decimalPlaces)

  return roundUpValue

}

export function calculateSurge(baseFare, surgeMultiplier) {
  // Your code here
  if (typeof baseFare !== "number" || typeof surgeMultiplier !== "number" || baseFare < 0 || surgeMultiplier < 0) {
    return 0
  }

  const fare = Math.ceil(baseFare * surgeMultiplier)

  return fare
}

export function findCheapestAndCostliest(...fares) {
  // Your code here
  // console.log(typeof fares)
  // console.log(fares) --> Object(Arrays)

  if (fares.length === 0 || typeof fares === null || typeof fares === undefined) {
    return null
  }

  const newFareList = []
  for (let i = 0; i < fares.length; i++) {
    if (typeof fares[i] === "number") {
      newFareList.push(fares[i])
    }
  }

  if (newFareList.length === 0) {
    return null
  }

  const maxVal = Math.max(...newFareList)
  const minVal = Math.min(...newFareList)

  return {
    cheapest: minVal,
    costliest: maxVal
  }

}

export function getDistanceDifference(from, to) {
  // Your code here
  const fromInt = parseInt(from)
  const toInt = parseInt(to)

  if (Number.isNaN(fromInt) || Number.isNaN(toInt)) {
    return -1
  }

  const distanceDiff = Math.abs(fromInt - toInt)

  return distanceDiff;
}
