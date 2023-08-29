function removeOddNumbers(arr) {
    const evenNumbers = arr.filter(num => num % 2 === 0);
    return evenNumbers;
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const evenNumbers = removeOddNumbers(numbers);
  
  console.log(evenNumbers); // Output: [2, 4, 6, 8]
  