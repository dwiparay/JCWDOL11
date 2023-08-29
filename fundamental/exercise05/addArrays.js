function addArrays(arr1, arr2) {
    const result = [];
  
    for (let i = 0; i < arr1.length; i++) {
      result.push(arr1[i] + arr2[i]);
    }
  
    return result;
  }
  
  const array1 = [1, 2, 3];
  const array2 = [3, 2, 1];
  const sumArray = addArrays(array1, array2);
  console.log(sumArray); // Output: [4, 4, 4]
  