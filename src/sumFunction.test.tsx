import isPalindrome from "./palindrome";
import twoOutOfThree from "./twoOutOfThree";
import isSameAfterReversals from "./numberAfterDoubleReverse";
import countOdds from "./countOdds";
import containsDuplicate from "./containsDublicate";

// Palindrome
test('if negative number is false', () => {
  const response = isPalindrome(-121);

  expect(response).toBeFalsy();
});

test('if positive number is true', () => {
  const response = isPalindrome(121);

  expect(response).toBeTruthy();
});

test('if numbers ends with 0 is false', () => {
  const response = isPalindrome(90);

  expect(response).toBeFalsy()
})

test('if 339009121900933 number is true', () => {
  const  response = isPalindrome(339009121900933);

  expect(response).toBeTruthy();
})

test('if 3390091211900933 number is false', () => {
  const response = isPalindrome(3390091211900933);

  expect(response).toBeFalsy()
})

// twoOutOfThree
test('if is return [2, 3, 4, 7]', () => {
  const response = twoOutOfThree([1, 2, 3, 4, 5], [2, 4, 6, 7], [0, 3, 4, 9, 7]);

  expect(response).toStrictEqual([2, 3, 4, 7])
})

test('if array length is 3', () => {
  const response = twoOutOfThree([1, 1, 2, 3], [2, 3, 2, 4], [1, 2, 2, 3, 5]);

  expect(response.length).toStrictEqual(3);
})

test('if array is empty', () => {
  const response = twoOutOfThree([1, 19, 22, 34], [119, 3, 122, 124], [91, 52, 42, 63, 11]);

  expect(response.length).toBeFalsy()
})

test('if array is not empty', () => {
  const response = twoOutOfThree([1, 19, 22, 34], [19, 3, 122, 124], [91, 52, 42, 63, 11]);

  expect(response.length > 0).toBeTruthy()
})

test('if is length 4', () => {
  const response = twoOutOfThree([1, 2, 3, 4, 5], [2, 4, 6, 7], [0, 3, 4, 9, 7]);

  expect(response).toHaveLength(4)
})

// isSameAfterReversals
test('if ends with zero is false', () => {
  const response = isSameAfterReversals(900);

  expect(response).toBeFalsy()
})

test('if it works with big numbers', () => {
  const response = isSameAfterReversals(9999444314149915);

  expect(response).toBeTruthy()
})

test('if negative number is false', () => {
  const response = isSameAfterReversals(-25);

  expect(response).toBeFalsy()
})

test('if number is 0 retrun true', () => {
  const response = isSameAfterReversals(0)

  expect(response).toBeTruthy()
})

// countOdds

test('if from 1 to 9 is 5', () => {
  const response = countOdds(1, 9);

  expect(response).toEqual(5)
})

test('if low > high is false', () => {
  const response = countOdds(10, 9);

  expect(response).toBeFalsy()
})

test('if low is negative number', () => {
  const response = countOdds(-1, 2);

  expect(response).toBeTruthy()
})

test('if it works with only negative numbers', () => {
  const response = countOdds(-100, -56);

  expect(response).toBeTruthy()
})

test('if it works with big numbers', () => {
  const response = countOdds(90, 1400);

  expect(response).toBeTruthy()
})

// containsDuplicate
test('if array without duplicates', () => {
  const response = containsDuplicate([12,31,42]);

  expect(response).toBeFalsy()
})

test('if 1 === "1" is false', () => {
  const response = containsDuplicate([1, '1', 11, '11'])

  expect(response).toBeFalsy()
})

test('if empty array is false', () => {
  const response = containsDuplicate([]);

  expect(response).toBeFalsy()
})

test('if array with duplicates', () => {
  const response = containsDuplicate([1, 12, 33, 1, 32, 33, 36]);

  expect(response).toBeTruthy()
})