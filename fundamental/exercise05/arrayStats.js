function arrayStats(arr) {
    let lowest = arr[0];
    let highest = arr[0];
    let total = 0;
  
    for (let num of arr) {
      total += num;
      if (num < lowest) {
        lowest = num;
      }
      if (num > highest) {
        highest = num;
      }
    }
  
    const average = total / arr.length;
    return { lowest, highest, average };
  }

  const nums = [3, 1, 7, 2, 8, 4];
  console.log(arrayStats(nums));
  