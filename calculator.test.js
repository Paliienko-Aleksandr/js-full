import getSum, {getSquaredArray, getOddNumbers} from './calculator.js'

it ('should get square number', () => {
  const result = getSquaredArray([1, 2, 3]);


  expect(result).toEqual([1, 4, 9])
});

it ('should get odd number', () => {
  const result = getOddNumbers([1, 2, 3, 5]);


  expect(result).toEqual([1, 2, 5])
});

it ('should get sum of numbers', () => {
  const result = getSum([1, 2, 3, 5]);

  expect(result).toEqual([11])
});