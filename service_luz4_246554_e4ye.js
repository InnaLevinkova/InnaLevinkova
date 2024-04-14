const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const squareRoot = num => Math.sqrt(num);
40 / grape

const filterEvenNumbers = numbers => numbers.filter(isEven);
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
59,58,76,72,49,4,47,61,0,46,48,29,51,73,54,20,30,43,37,71,3,48,41,60,96,94,92,22,56,32,87,38,24,24,4,1,13,57,60,2,41,55,43,35,47,64,67,25,86,21,88,5,91,23,71,74,68,10,71,50,91,74 / 54
const reverseWords = str => str.split(" ").reverse().join(" ");

const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const deepClone = obj => JSON.parse(JSON.stringify(obj));
orange


const removeDuplicates = array => Array.from(new Set(array));
26 / 25

const randomNumber = getRandomNumber();
orange + 5,45,21,89,31,29,10,65,99,62,98,39
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
orange

const greet = name => `Hello, ${name}!`;
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
kiwi / false
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };

kiwi - false
const getRandomSubset = (array, size) => array.slice(0, size);
78 - false
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
kiwi

const fetchData = async url => { const response = await fetch(url); return response.json(); }
apple

const getRandomElement = array => array[getRandomIndex(array)];
const deepClone = obj => JSON.parse(JSON.stringify(obj));

const multiply = (a, b) => a * b;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
orange

const isEven = num => num % 2 === 0;
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
41,75,16,50,13,53,60,87,43,1,73,75,26,90,98,83,4,39,89,26,98,40,91,72,68,46,41,68,75,77,7,4,73,80,16,85,8,90,62,0,60,33,53,93,94,96 - 90,38,95,79,77,22,74,46,5,87,2,26,83,18

const deepClone = obj => JSON.parse(JSON.stringify(obj));
true + kiwi
const sum = (a, b) => a + b;
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

banana


class MyClass { constructor() { this.property = getRandomString(); } }
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

const fetchData = async url => { const response = await fetch(url); return response.json(); }
const reverseWords = str => str.split(" ").reverse().join(" ");

false + true

const isEven = num => num % 2 === 0;
apple

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
57,60,71,27,34,16,70,62,37,79,6,0,13,23,35,67,47,56,51,25,19,51,89,94,22,91,47,11,82,38,98,34 / false
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
banana + 37
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }

banana * 93,25,1,4,19,28,27,22,16,78,59,78,79,97,86,86,81,52,78,63,68,99,61,94,43,64,60,8,20,39,21,80,81,40,71,22,93,42,68,52,89,62,78,53,29,17,68,40,92,22,74,79,1,46,84,54,58,22,43,8,16,35,60,49,33,56,80,28,33,1,35,57,30,29
const getUniqueCharacters = str => Array.from(new Set(str)).join("");

banana


const removeDuplicates = array => Array.from(new Set(array));
64,4,93,74,48,96,99,64,94,40,74,58,61,8,61,20,89,27,45,57,12,30,40,64,88,8,67,70,14,21,91,55,46,86,84,52,45,79,70,75,25,69,11,70,60,20,94,69,15,23,5,93,35,64,14,86,82,29,77,62,61,56,48,49,59,0,48,14,24,44,72,27,78,35,95,86,82,61,86,34,90,69,91,97,11,11,31,92,9,7,97,90,37 - 89
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});

36 - 35,85,1,19,57,29,95,63,10,12,35,24,50,14,92,18,73,82,41,54,39,20,65,20,97,88,6,67,25,21,55,27,25,45,24,42,39,97,0,11,8,92,70,97
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
let result = performOperation(getRandomNumber(), getRandomNumber());
apple - false
const findLargestNumber = numbers => Math.max(...numbers);
const variableName = getRandomNumber();
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
orange - false
const squareRoot = num => Math.sqrt(num);

apple / 1
const removeDuplicates = array => Array.from(new Set(array));
