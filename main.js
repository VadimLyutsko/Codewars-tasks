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
//
//     Examples input/output:


function XO(str) {
    let calcX = 0;
    let calcO = 0;

    str.toString().toLocaleLowerCase().split('').forEach(i => {

        switch (i) {
            case 'o':
                calcO++;
                return;
            case 'x':
                calcX++;
                return
        }

        // (i === 'o') ? calcO++ : calcX++

        // if (i === 'o') {
        //     calcO++;
        // } else if (i === 'x') {
        //     calcX++;
        // }
    })

    if (!str.includes('o') && !str.includes('x')) {
        return true
    } else return calcX === calcO;
}

XO("ooxx")
XO("xooxx")
XO("ooxXm")
XO("zpzpzpp")
XO("zzoo")

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
