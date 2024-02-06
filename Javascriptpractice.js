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

const countChars = (str, char) =>
str.split('').filter(ch => ch === char).length;

const contains2To4 = (str,char) =>
countChars(str, char) >= 2 && countChars(str, char) <= 4;

console.log(contains2To4('ooh!', 'o'));
console.log(contains2To4('oh!', 'o'));
console.log(contains2To4('oooh!', 'o'));
console.log(contains2To4('ooooh!', 'o'));
console.log(contains2To4('oooooh!', 'o'));