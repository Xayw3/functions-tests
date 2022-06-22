function isSameAfterReversals(num: number): boolean {
  const reversed1 = parseFloat(num.toString().split('').reverse().join(''));
  const reversed2 = parseFloat(reversed1.toString().split('').reverse().join(''));
  
  if (reversed2 === num) {
      return true
  } return false
};

export default isSameAfterReversals;