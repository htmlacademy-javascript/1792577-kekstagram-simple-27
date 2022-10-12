function randomNumber(min, max) {
  if (isNaN(min) || isNaN(max)) {
    return NaN;
  }
  if (Number.isInteger(max / min)) {
    if (min >= 0 && max >= min) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    if (max >= 0 && max <= min) {
      return Math.floor(Math.random() * (min - max + 1)) + max;
    }
  }
}

randomNumber();

function longString(string, lenght) {
  return string.lenght <= lenght;
}

longString('', 140);
