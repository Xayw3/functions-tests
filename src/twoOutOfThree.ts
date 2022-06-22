function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]): number[] {
  const uniqueNums: number[] = [];
  const copyNums = [...nums1, ...nums2, ...nums3];
  
  for (let nums of copyNums){
      if (!uniqueNums.includes(nums)){
          uniqueNums.push(nums)
      }
  }
  
  return uniqueNums.filter((el) => nums1.includes(el) && nums2.includes(el) || nums1.includes(el) && nums3.includes(el) || nums2.includes(el) && nums3.includes(el))
};

export default twoOutOfThree;