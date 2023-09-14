module.exports = function toReadable(number) {
    const singleDigits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const twoDigitsTeen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number === 0) {
        return 'zero';
    }

    const numStr = String(number).split('').reverse();

    let result = '';

    if (numStr[2]) {
        result += singleDigits[numStr[2]] + ' hundred';
    }

    if (numStr[1] === '1') {
        result += ' ' + twoDigitsTeen[numStr[0]];
    } else {
        if (numStr[1]) {
            result += ' ' + tens[numStr[1]];
        }

        if (numStr[0] !== '0') {
            result += ' ' + singleDigits[numStr[0]];
        }
    }

    return result.trim();
}