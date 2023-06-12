module.exports = function toReadable (number) {
  let a = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
  let b = ["twen", "thir", "four", "fift", "six", "seven", "eigh", "nine"];
    if (number / 13 < 1) {
        return a[number];

    } else if (number / 20 < 1) {
      return b[number - 12] + 'teen';
  }
  }