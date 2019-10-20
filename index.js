module.exports = (arr = []) => {
  let sortedElementsCount = 0
  while (sortedElementsCount !== arr.length) {
    let maxIndex, maxValue
    for (let i=0; i<arr.length - sortedElementsCount; i++) {
      if (arr[i] >= maxValue || maxValue === undefined) { maxValue = arr[i]; maxIndex = i }
    }
    const endPos = arr.length - sortedElementsCount - 1
    const tmp = arr[endPos]
    arr[endPos] = arr[maxIndex]
    arr[maxIndex] = tmp
    sortedElementsCount++
  }
  return arr
}