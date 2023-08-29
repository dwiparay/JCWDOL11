function arrayStatsWithSort(arr) {
    const sortedArr = arr.slice().sort((a, b) => a - b);
    const lowest = sortedArr[0];
    const highest = sortedArr[sortedArr.length - 1];
    
    const total = sortedArr.reduce((sum, num) => sum + num, 0);
    const average = total / sortedArr.length;
    
    return { lowest, highest, average };
  }
  const nums = [3, 1, 7, 2, 8, 4];
  
  console.log(arrayStatsWithSort(nums));
    