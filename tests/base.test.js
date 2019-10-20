const sort = require('../index')

test('basic', () => {
  expect(sort([2, 7, 1, 5, 3])).toEqual([ 1, 2, 3, 5, 7 ])
})