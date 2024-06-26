// 1

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
//
//     For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
//
// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
//
// Note: The function accepts an integer and returns an integer.
//
// function squareDigits(num) {
//     return +num.toString().split('').map(i => i ** 2).join('');
// }
//
// squareDigits(9119)


// 2

// In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.
//     The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.
//
// NOTE: Extra spaces before or after the code have no meaning and should be ignored.
//
//     In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.
//
//     Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.
//
// decodeMorse = function (morseCode) {
//     const MORSE_CODE = {
//         '.-': 'A',
//         '-…': 'B',
//         '-.-.': 'C',
//         '-..': 'D',
//         '.': 'E',
//         '..-.': 'F',
//         '--.': 'G',
//         '....': 'H',
//         '..': 'I',
//         '.---': 'J',
//         '-.-': 'K',
//         '.-..': 'L',
//         '--': 'M',
//         '-.': 'N',
//         '---': 'O',
//         '.--.': 'P',
//         '--.-': 'Q',
//         '.-.': 'R',
//         '…': 'S',
//         '-': 'T',
//         '..-': 'U',
//         '…-': 'V',
//         '.--': 'W',
//         '-..-': 'X',
//         '-.--': 'Y',
//         '--..': 'Z',
//         '-----': '0',
//         '.----': '1',
//         '..---': '2',
//         '…--': '3',
//         '….-': '4',
//         '…..': '5',
//         '-….': '6',
//         '--…': '7',
//         '---..': '8',
//         '----.': '9',
//     };
//     morseCode = morseCode.trim()
//     let wordFromCode = morseCode.split('   ')
//     let result = []
//
//     for (let i = 0; i < wordFromCode.length; i++) {
//
//         let item = wordFromCode[i].split(' ')
//         for (let j = 0; j < item.length; j++) {
//             if (MORSE_CODE[item[j]]) {
//                 result.push(MORSE_CODE[item[j]])
//             }
//         }
//
//         if (i !== wordFromCode.length - 1) {
//             result.push(' ')
//         }
//     }
//     return result.join('')
// }
//
// decodeMorse('.... . -.--   .--- ..- -.. .')
// //should return "HEY JUDE"


// 3

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// Examples input/output:


// function XO(str) {
//     let calcX = 0;
//     let calcO = 0;
//
//     str.toString().toLocaleLowerCase().split('').forEach(i => {
//
//         switch (i) {
//             case 'o':
//                 calcO++;
//                 return;
//             case 'x':
//                 calcX++;
//                 return
//         }
//     })
//
//     if (!str.includes('o') && !str.includes('x')) {
//         return true
//     } else return calcX === calcO;
// }
//
// XO("ooxx")
// XO("xooxx")
// XO("ooxXm")
// XO("zpzpzpp")
// XO("zzoo")
//
// // XO("ooxx") => true
// // XO("xooxx") => false
// // XO("ooxXm") => true
// // XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// // XO("zzoo") => false


// 4

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
//     Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
//
//     Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""
//
// function order(words) {
//     const myMatrix = {
//         '1': 1,
//         '2': 2,
//         '3': 3,
//         '4': 4,
//         '5': 5,
//         '6': 6,
//         '7': 7,
//         '8': 8,
//         '9': 9,
//     }
//     let preResultArray = []
//     let arrayOfWords = words.split(' ')
//
//     for (let i = 0; i < arrayOfWords.length; i++) {
//         let word = arrayOfWords[i]
//         for (let j = 0; j < word.length; j++) {
//             if (myMatrix[word[j].toString()]){
//                 preResultArray[word[j] -1]=word
//             }
//         }
//     }
//     return preResultArray.join(' ')
// }
//
//
// order("is2 Thi1s T4est 3a")
// order("4of Fo1r pe6ople g3ood th5e the2")


// 5

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//
// Example: (Input --> Output)
//
// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
//
// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

// function isIsogram(str) {
//     let arrOfStr = []
//     let result = true
//
//     str.toLowerCase().split('').forEach(i => {
//         arrOfStr.includes(i) ? result = false : true
//         arrOfStr.push(i)
//     })
//     return result
// }
//
// isIsogram('ava')


// 6

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
//
//     The binary number returned should be a string.
//
//     Examples:(Input1, Input2 --> Output (explanation)))
//
// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
// function addBinary(a,b){
//     return (a+b).toString(2)
// }
//
// addBinary(5, 9)


// 7

// Make a program that filters a list of strings and returns a list with only your friends name in it.
//
//     If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
//
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
//
// i.e.
//
//     friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.
// function friend(friends){
//     console.log(friends.filter(i=>i.length===4))
//    return  friends.filter(i=>i.length===4)
//     //your code here
// }
//
// friend(["Ryan", "Kieran", "Mark"])


// 8

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
//
//     Note: a and b are not ordered!
//
//     Examples (a, b) --> output (explanation)
// function getSum(a, b) {
//     if (a===b){
//         return a
//     }else {
//         let arr = [a,b].sort((a,b)=>a-b)
//         let result = 0
//         for (let i = arr[0]; i <= arr[1]; i++) {
//             result += i
//         }
//         return result
//     }
// }
//
// getSum(-1, 2)


// 9

// Given the triangle of consecutive odd numbers:
//
//     1
// 3     5
// 7     9    11
// 13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
//
// 1 -->  1
// 2 --> 3 + 5 = 8
//
// function rowSumOddNumbers(n) {
//     let numbers_before_n_count = (n - 1) * n / 2;
//     console.log(numbers_before_n_count)
//
//     let first_number_in_nth_row = numbers_before_n_count * 2 + 1;
//     let last_number_in_nth_row = first_number_in_nth_row + 2 * (n - 1);
//
//     return n * (first_number_in_nth_row + last_number_in_nth_row) / 2;
// }
//
// rowSumOddNumbers(15)


// 10

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
//
//     Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
//
//     Don't forget the space after the closing parentheses!
//
//
// function createPhoneNumber(numbers) {
//     return `(${(numbers.slice(0, 3).join(''))}) ${(numbers.slice(3, 6).join(''))}-${(numbers.slice(6, 10).join(''))}`
// }
//
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// createPhoneNumber([1, 1, 9, 0, 5, 0, 4, 6, 0, 6]) // => returns "(119) 050-460"


// 11

// Some numbers have funny properties. For example:
//
//     89 --> 8¹ + 9² = 89 * 1
//
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
//
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
//
// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p
//
// we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
//     In other words:
//
//     Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
//
// If it is the case we will return k, if not return -1.
//
// Note: n and p will always be given as strictly positive integers.
//
// digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
// digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
// digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
//
// function digPow(n, p) {
//     let k = 0;
//
//     let arr = n.toString().split('')
//
//     for (let i = 0; i < arr.length; i++) {
//         k = k + arr[i] ** (p + i)
//     }
//     if (Number.isInteger(k / n)) {
//         return k / n
//     } else {
//         return -1
//     }
// }
//
// // digPow(89, 1)
// digPow(46288, 3)


// 12

// Given a string of words, you need to find the highest scoring word.
//
//     Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
//
//     For example, the score of abad is 8 (1 + 2 + 1 + 4).
//
//     You need to return the highest scoring word as a string.
//
//     If two words score the same, return the word that appears earliest in the original string.
//
//     All letters will be lowercase and all inputs will be valid.
// function high(x){
//     // 1. split x by ' ' to an array.
//     const wordList = x.split(' ');
//
//     // 2. calculate each word score to another array.
//     const getScore = (word) => {
//         return word.split('').reduce((prevScore, currWord) => prevScore + currWord.charCodeAt(0) - 96, 0)
//     }
//     const scoreList = wordList.map(word => getScore(word));
//
//     // 3. get the highest score and index
//     let highestIndex = 0;
//     let highestScore = 0;
//     scoreList.forEach((score, i) => {
//         if (score > highestScore) {
//             highestIndex = i;
//             highestScore = score;
//         }
//     });
//
//     // 4. return the string of the highest score index of wordList
//     return wordList[highestIndex];
// }
//
// high('what time are we climbing up the volcano')


// 13

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
//
// Additionally, if the number is negative, return 0.
//
// Note: If the number is a multiple of both 3 and 5, only count it once.
//
//     Courtesy of projecteuler.net (Problem 1)
//
// function solution(number) {
//     let result = 0;
//     if (number < 0) return result
//
//     for (let i = 1; i < number; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             result += i
//         }
//     }
//     return result
// }
//
// solution(10)


// 14

// Complete the solution so that the function will break up camel casing, using a space between words.
//
//     Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
// complete the function
// function solution(string) {
//     let result = '';
//
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === string[i].toLowerCase()) {
//             result += string[i]
//         } else {
//             result += ` ${string[i]}`
//         }
//     }
//     return result
// }
//
// solution('camelCasing')
// solution('identifier')


// 15

// The marketing team is spending way too much time typing in hashtags.
//     Let's help them with our own Hashtag Generator!
//
// Here's the deal:
//
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
//     If the final result is longer than 140 chars it must return false.
//     If the input or the result is an empty string it must return false.
//     Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false
//
// function generateHashtag(string) {
//     if (string.trim() === '') return false;
//
//     const stringWithCamelCase = string
//         .split(' ')
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//         .join('');
//
//     const stringWithHashtag = `#${stringWithCamelCase.trim()}`;
//
//     return stringWithHashtag.length > 140 ? false : stringWithHashtag;
// }
//
//
// generateHashtag('Hello there thanks for trying my Kata')
// generateHashtag("    Hello     World   ")
// generateHashtag("Do We have A Hashtag")


// 16

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
//
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
//
// function moveZeros(arr) {
//     let resultArr = [];
//     let zerosArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] !== 0 ? resultArr.push(arr[i]) : zerosArr.push(0)
//     }
//     return [...resultArr, ...zerosArr]
// }
//
// moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])


// 17

// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.
//
//     Example:
//
// Given an input string of:
//
//     apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:
//
//     apples, pears
// grapes
// bananas
// The code would be called like so:
//
//     var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"

// function solution(input, markers) {
//     input = input.split('\n')
//     let res = []
//
//     for (let i = 0; i < input.length; i++) {
//         // console.log(input[i].indexOf('#'))
//         if (input[i].includes('#')) {
//             res.push(input[i].slice(0, input[i].indexOf('#')) + '\n')
//             // console.log(input[i].slice(0, input[i].indexOf('#')))
//         } else if (!input[i].includes('#') && !input[i].includes('!')) {
//             res.push(input[i] + '\n')
//             // console.log(input[i])
//         }
//         else if (input[i].includes('!')) {
//             res.push(input[i].slice(0, input[i].indexOf('!')))
//             // console.log(input[i].slice(0, input[i].indexOf('!')) )
//         }
//         // console.log(input[i].length)
//         // for (let j = 0; j < input[i].length; j++) {
//         //     console.log(input[i][j])
//         // }
//
//     }
//
//
//     console.log(res.join('').trim())
//     return res.join('').trim()
// // }
//
// function solution(input, markers) {
//     return  input
//         .split('\n')
//         .map((s) => markers.reduce((t, m) => t.split(m)[0].trim(), s))
//         .join('\n');
// }
//
// solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])


// 18

// We want to create a function that will add numbers together when called in succession.
//
// add(1)(2); // == 3
// We also want to be able to continue to add numbers to our chain.
//
// add(1)(2)(3); // == 6
// add(1)(2)(3)(4); //  == 10
// add(1)(2)(3)(4)(5); // == 15
// and so on.
//
//     A single call should be equal to the number passed in.
//
// add(1); // == 1
// We should be able to store the returned values and reuse them.
//
//     var addTwo = add(2);
// addTwo; // == 2
// addTwo + 5; // == 7
// addTwo(3); // == 5
// addTwo(3)(5); // == 10
// We can assume any number being passed in will be valid whole number.
//
// function add(n){
//     let fn = function(x) {
//         return add(n + x);
//     };
//
//     fn.valueOf = function() {
//         return n;
//     };
//
//     return fn;
// }
// console.log(add(2)(3))
// let addTwo = add(2);
// console.log(addTwo); // == 2
// addTwo + 5; // == 7
// addTwo(3); // == 5
// addTwo(3)(5); // == 10


// My Task
//
// let nums = [1.33, 35, 2, 1, 78, 25, 268, 12, 157, 29,];
//
// for (let k = 0; k < nums.length - 1; k++) { // Не сравнивает последнее число(сущность)
//     let isSorted = true;                     // !флаг
//     for (let i = 0; i < nums.length - 1 - k; i++) {  // Не сравнивает последнее число(сущность) (-1) и с каждым кругом отметает уже установленные на свои места сущности (-j)
//         if (nums[i] > nums[i + 1]) {
//             isSorted = false;               //  ! флаг, не проваливаться, если массив уже отсортирован
//             // let item = nums[i];
//             // nums[i] = nums[i + 1];
//             // nums[i + 1] = item;
//             [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];  // [деструктуризация для понтов, вместо введения новой переменной]
//         }
//     }
//     if (isSorted) break;
// }
// console.log(nums)


// 19


// In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.
//
//     Examples:
//
// "one" => 1
// "twenty" => 20
// "two hundred forty-six" => 246
// "seven hundred eighty-three thousand nine hundred and nineteen" => 783919
// Additional Notes:
//
//     The minimum number is "zero" (inclusively)
// The maximum number, which must be supported is 1 million (inclusively)
// The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
// All tested numbers are valid, you don't need to validate them
//
// function parseInt(string){
//     var ref = { one:1, two:2, three:3, four:4, five:5, six:6, seven:7, eight:8, nine:9, ten:10, eleven:11, twelve:12, thirteen:13, fourteen:14, fifteen:15, sixteen:16, seventeen:17, eighteen:18, nineteen:19, twenty:20, thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety:90 },
//         mult = { hundred: 100, thousand: 1000, million: 1000000 },
//         strNums = string.split(' ').reverse(),
//         number = 0,
//         multiplier = 1;
//
//     for(i in strNums){
//         if( mult[strNums[i]] != undefined ) {
//             if(mult[strNums[i]]==100) {
//                 multiplier*=mult[strNums[i]]
//             }else{
//                 multiplier=mult[strNums[i]]
//             }
//         } else {
//             if (!isNaN(parseFloat(strNums[i]))) {
//                 number += parseFloat(strNums[i]) * multiplier;
//             } else {
//                 var nums = strNums[i].split('-');
//                 number += ((ref[nums[0]]||0) + (ref[nums[1]]||0)) * multiplier;
//             }
//         }
//     }
//     return number;
// }
//
// Хук useDebounce
//
// const useDebounce = (value, delay) => {
//     const [debouncedValue, setDebouncedValue] = useState(value);
//
//     useEffect(() => {
//         const timeout = setTimeout(() => {
//             setDebouncedValue(value);
//         }, delay);
//
//         return () => {
//             clearTimeout(timeout);
//         };
//     }, [value]);
//
//     return debouncedValue;
// };
//
// // Использование
//
// const Counter = () => {
//     const [value, setValue] = useState(0);
//     const lastValue = useDebounce(value, 1000);
//
//     return (
//         <div>
//             <p>
//                 Current Value: {value} | Debounced Value: {lastValue}
//             </p>
//             <button onClick={() => setValue(value + 1)}>Increment</button>
//         </div>
//     );
// };


// Started studying BEM - methodology
// const f = (s) => {
//     let arr = []
//     arr.push(s[0].toUpperCase())
//     for (let i = 1; i < s.length; i++) {
//         arr.push(s[i].toLowerCase())
//     }
//
//     let arr1 = []
//     arr1 = s.split(' ')
//     console.log(arr1)
//     let res = [...arr1]
//     res[3] = `- ${res[3].toLowerCase()}`
//
//     console.log(res.join(' '))
// }
//
// f('Started studying BEM METHODOLOGY')


// 20

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
// function solution(str){
//     var arr = str.split('')
//     var res = []
//
//     for(let i = 0; i<arr.length; i+=2){
//         if(arr[i+1]) res.push(arr[i]+arr[i+1])
//         else res.push(arr[i]+'_')
//     }
//
//     return res
// }


// 21

// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
// function take(arr, n) {
//     const res = []
//
//     for (let i = 0; i < arr.length; i++) {
//         i < n && res.push(arr[i])
//     }
//
//     return res
// }
//
// take([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 2)


// 22

// DESCRIPTION:
//     You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
//
//     Examples
//     [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)
//
// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)
// function findOutlier(integers) {
//     let res = ''
//     let flagEven =
//         integers[0] % 2 === 0 && integers[1] % 2 === 0 ||
//         integers[0] % 2 === 0 && integers[2] % 2 === 0 ||
//         integers[1] % 2 === 0 && integers[2] % 2 === 0
//
//     let flagOdd =
//         integers[0] % 2 !== 0 && integers[1] % 2 !== 0 ||
//         integers[0] % 2 !== 0 && integers[2] % 2 !== 0 ||
//         integers[1] % 2 !== 0 && integers[2] % 2 !== 0
//
//     if (flagEven) {
//         for (let i = 0; i < integers.length; i++) {
//             integers[i] % 2 !== 0 ? res = integers[i] : ''
//         }
//     }
//
//     if (flagOdd) {
//         for (let i = 0; i < integers.length; i++) {
//             integers[i] % 2 === 0 ? res = integers[i] : ''
//         }
//     }
//
//     return res
// }
//
// findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])
// findOutlier([160, 3, 1719, 19, 11, 13, -21])
// findOutlier([0, 1, 2])

// elem.onclick = function(event) {
//     // вывести тип события, элемент и координаты клика
//     alert(event.type + " на " + event.currentTarget);
//     alert("Координаты: " + event.clientX + ":" + event.clientY);
// };

// function getWords(word, chars) {
//     var index = word.indexOf("?"), arr = [];
//     if (index >= 0) {
//         const charsSlice1 = chars.slice(1);
//         for (var i = 0; i < chars[0].length; i++) {
//             arr = arr.concat(getWords(word.replace("?", chars[0][i]), charsSlice1));
//         }
//         return arr;
//     }
//     return [word];
// };

// 23
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// function pigIt(str) {
//     return str
//         .split(' ')
//         .map(word => {
//             if (word === '!' |word === '?' ) {
//                 return word
//             } else {
//                 let item = ''
//                 let arrItem = word.split('')
//                 item = arrItem.slice(1) + arrItem.slice(0, 1) + 'ay'
//                 return item.split(',').join('')
//             }
//         })
//         .join(' ')
// }
//
// console.log(pigIt('Pig latin is cool'));
// console.log(pigIt('Hello world ?'));

// 24

// function duplicateCount(text){
//     return text
//         .toLowerCase()
//         .split('')
//         .filter((val, i, arr) => {
//             return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
//         }).length;
// }
//
// console.log(duplicateCount("abcde"))
// console.log(duplicateCount("aabbcde"))
// console.log(duplicateCount("aabBcde"))
// console.log(duplicateCount("indivisibility"))
// console.log(duplicateCount("Indivisibilities"))
// console.log(duplicateCount("aA11"))
// console.log(duplicateCount("ABBA"))

//25

// Clock shows h hours, m minutes and s seconds after midnight.
//
//     Your task is to write a function which returns the time since midnight in milliseconds.
//
//     Example:
// h = 0
// m = 1
// s = 1
//
// result = 61000
//
// function past(h, m, s){
//     var miliseconds = 0;
//     miliseconds = miliseconds + s * 1000;
//     miliseconds = miliseconds + m * 60000;
//     miliseconds = miliseconds + h * 3600000;
//     return miliseconds;
// }

var reverseString = function (str) {
  return str
  .split('')
  .reverse()
  .join('')
  };
  