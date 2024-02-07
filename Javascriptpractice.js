// const isEqualto100 = (a,b) => a === 100 || b === 100 || (a+b) === 100;

// console.log(isEqualto100(100,0));
// console.log(isEqualto100(100,0));

// console.log(isEqualto100(10,0));
// console.log(isEqualto100(0,10));

// console.log(isEqualto100(20,80));
// console.log(isEqualto100(50,50));

// const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));

// console.log(getFileExtension('index.html'));
// console.log(getFileExtension('webpack.config.js'));

// const movesCharsForward = (str) => 
//  str
//  .split('')
//  .map(char => String.fromCharCode(char.charCodeAt
//     (0) + 1))
//     .join('');

//     console.log(movesCharsForward('abcd'));

// const formatDate = (date = new Date()) => {
//     const days = date.getDate() + 1;
//     const months = date.getMonth() + 1;
//     const years = date.getFullYear();
//     return `${days}/${months}/${years}`;
// }

// console.log(formatDate());

// const addNew = (str) =>
// str.indexOf('New!') === 0 ? str: `New! ${str}`;

// console.log(addNew('New! Offers'));

// const makeNewString = (str) => 
// str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);

// console.log(makeNewString('abc'));
// console.log(makeNewString('abcdef'));
// console.log(makeNewString('abc123abc123'));

// console.log(makeNewString('ab'));

// const firstHalf = (str) => str.slice(0, str.length / 2);

// console.log(firstHalf('temp'));
// console.log(firstHalf('temple'));
// console.log(firstHalf('temples'));

// const concatenate = (str1, str2) => 
// str1.slice(1) + str2.slice(1);

// console.log(concatenate('abc', 'def'));
// console.log(concatenate('junior', 'developer'));

// const hundred = (num1, num2); {
// if ((100 - num1) > (100 - num2));
// return num2}

// const closestTo100 = (a,b) => (100 - a) < (100 - b)? a : b ;

// console.log(closestTo100(99, 1));
// console.log(closestTo100(49, 51));
// console.log(closestTo100(50, 50));

// const countChars = (str, char) =>
// str.split('').filter(ch => ch === char).length;

// const contains2To4 = (str,char) =>
// countChars(str, char) >= 2 && countChars(str, char) <= 4;

// console.log(contains2To4('ooh!', 'o'));
// console.log(contains2To4('oh!', 'o'));
// console.log(contains2To4('oooh!', 'o'));
// console.log(contains2To4('ooooh!', 'o'));
// console.log(contains2To4('oooooh!', 'o'));

// const countEventNumbers = (arr) => 
// arr.filter(num => num % 2 === 0).length;

// const createArrayOfNumbers = (num) => {
//     const returnArray = [];
//     for (let i = 1; i <= num; i += 1) {
//         returnArray.push(i);
//     }
//     return returnArray;
// };

// console.log(countEventNumbers(createArrayOfNumbers(6)));
// console.log(countEventNumbers(createArrayOfNumbers(9)));

// console.log(countEventNumbers([1,2,3,4,5,6]));
// console.log(countEventNumbers([2,2,2,2,5,6]));
// console.log(countEventNumbers([3,5,7,9,10,100]));

// const isAscending = (arr) => {
//     for (let i = 0; i < arr.length; i += 1) {
//         if (arr[i+1] < arr[i]) return false;
//     }
//     return true;
// }

// console.log(isAscending([1,2,3,4,5,6]));
// console.log(isAscending([1,2,5,4,3,6]));
// console.log(isAscending([1,2,3,4,6,6]));

// const largestEven = (arr) => 
// Math.max(...arr.filter(num => num % 2 === 0));

// console.log(largestEven([1,2,3,4,5,6]));
// console.log(largestEven([1,2,33,4,5,6]));
// console.log(largestEven([1,2,3,,44,55,6]));

const replaceFirstDigit = (str) => 
str.replace(/[0-9]/, '$');

console.log(replaceFirstDigit('Abcd1Abcde'));
console.log(replaceFirstDigit('A123Abcde'));
console.log(replaceFirstDigit('A1cd1Abcd1'));

const replaceFirstDigit2 = (str) => 
str.replace(/[\d]/, '$');

console.log(replaceFirstDigit2('Abcd1Abcde'));
console.log(replaceFirstDigit2('A123Abcde'));
console.log(replaceFirstDigit2('A1cd1Abcd1'));

const replaceAllDigit = (str) => 
str.replace(/[0-9]/g, '$');

console.log(replaceAllDigit('Abcd1Abcde'));
console.log(replaceAllDigit('A123Abcde'));
console.log(replaceAllDigit('A1cd1Abcd1'));

~