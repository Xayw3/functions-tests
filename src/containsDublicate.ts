function containsDuplicate(nums: any[]): boolean {
  const arr: any[] = [];
  
  for (let n of nums){

      if (!arr.includes(n)){
          arr.push(n)
      }
  }

  if (arr.length === nums.length) {
      return false
  } return true
};

export default containsDuplicate;