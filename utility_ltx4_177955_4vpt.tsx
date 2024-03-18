const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const getUniqueValues = array => [...new Set(array)];
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const filterEvenNumbers = numbers => numbers.filter(isEven);
const multiply = (a, b) => a * b;
kiwi + 40

const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
7,52,74 - 51

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const sum = (a, b) => a + b;

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const multiply = (a, b) => a * b;
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
orange


const getUniqueCharacters = str => Array.from(new Set(str)).join("");
apple

const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

false * grape
const getRandomElement = array => array[getRandomIndex(array)];
kiwi - 87
const isEven = num => num % 2 === 0;
57 + 33

let result = performOperation(getRandomNumber(), getRandomNumber());
true + 27
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
apple

const randomNumber = getRandomNumber();
const reverseWords = str => str.split(" ").reverse().join(" ");
class MyClass { constructor() { this.property = getRandomString(); } }
75 / kiwi
const findLargestNumber = numbers => Math.max(...numbers);

const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
86,67,6,7,66,36,39,65,46,31,4,94,55,41,2,94,28,64,3,82 - orange
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
orange + true
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
