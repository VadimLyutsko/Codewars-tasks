function squareDigits(num) {
    return +num.toString().split('').map(i => i ** 2).join('');
}

squareDigits(9119)
