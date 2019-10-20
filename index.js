module.exports = (arr = []) => {
  let endPos = arr.length - 1
  while (endPos !== 0) {
    let maxIndex, maxValue
    for (let i=0; i<=endPos; i++) {
      if (arr[i] >= maxValue || maxValue === undefined) { maxValue = arr[i]; maxIndex = i }
    }

    const tmp = arr[endPos]
    arr[endPos] = arr[maxIndex]
    arr[maxIndex] = tmp
    endPos--
  }
  return arr
}