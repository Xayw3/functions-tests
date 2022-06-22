function isPalindrome(x: number): boolean {
  const num = parseFloat(x.toString().split('').reverse().join(''));
  
  return x === num
};

export default isPalindrome;