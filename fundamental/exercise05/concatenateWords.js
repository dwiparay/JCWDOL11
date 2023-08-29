function concatenateWords(words) {
    if (words.length === 0) {
      return "";
    } else if (words.length === 1) {
      return words[0];
    } else if (words.length === 2) {
      return `${words[0]} and ${words[1]}`;
    } else {
      const allButLast = words.slice(0, -1).join(", ");
      return `${allButLast}, and ${words[words.length - 1]}`;
    }
  }
  
  const wordsArray = ["Apple", "Banana", "Cherry", "Date"];
  const concatenatedString = concatenateWords(wordsArray);
  console.log(concatenatedString); // Output: "Apple, Banana, Cherry, and Date"
  