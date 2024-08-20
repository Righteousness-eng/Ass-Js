function analyzeString(str) {
    const noOfCharacters = {
        alphabets: 0,
        digits: 0,
        symbols: 0,
    };

    for (const character of str) {
        if (/[a-zA-Z]/.test(character)) {
            noOfCharacters.alphabets++;
        } else if (/\d/.test(character)) {
            noOfCharacters.digits++;
        } else (/\s/.test(character))
            noOfCharacters.symbols++;
    }

    return noOfCharacters;
}

const string = "Hello, Deborah@123!";
const result = analyzeString(string);

console.log("Alphabets:", result.alphabets);
console.log("Digits:", result.digits);
console.log("Symbols:", result.symbols);



function sortAndFilterNumbers(arr) {
    const numbers = arr.filter((elements) => typeof elements === 'number');

    numbers.sort((r, d) => r - d);
  
    return numbers;
  }
  
  let arr = [10, '3', 'edoHub', 2, 'sirDavid', 50, 11, 74, '5'];

  const sortedNumbers = sortAndFilterNumbers(arr);

  console.log(sortedNumbers);
  
  

function generateStarPattern(maxNoOfStars) {
    for (let i = 1; i <= maxNoOfStars; i++) {
        const stars = '*'.repeat(i);
        console.log(stars);
    }
}

const maxNoOfStars = 3;
generateStarPattern(maxNoOfStars);