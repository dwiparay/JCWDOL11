function addUniqueElement(arr, element) {
    if (!arr.includes(element)) {
      arr.push(element);
    }
  }
  
  const numbers = [1, 2, 3];
  addUniqueElement(numbers, 4);
  addUniqueElement(numbers, 2);
  
  console.log(numbers); // Output: [1, 2, 3, 4]
  