function caesarCipher(string, shiftFactor) {
  const stringArray = string.split("");

  const shiftedCharCodeArray = shiftChars(stringArray, shiftFactor);

  const cipher = makeCipher(shiftedCharCodeArray);

  return cipher;
}

function shiftChars(stringArray, shiftFactor) {
  const shiftFactorValue = shiftFactor % 26;

  const shiftedArray = stringArray.map((char) => {
    const charCode = char.charCodeAt(0);
    let shiftedCharCode = null;

    // Non-alphabetical characters don't need to shift
    if (
      (charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122)
    ) {
      shiftedCharCode = charCode + shiftFactorValue;
    } else {
      shiftedCharCode = charCode;
    }

    // Wrap chars back to the start of alphabet if shift factor exceeds 'z' e.g xyz + 3 = abc
    if (
      shiftedCharCode > 122 ||
      (shiftedCharCode - shiftFactorValue <= 90 &&
        shiftedCharCode - shiftFactorValue >= 65 &&
        shiftedCharCode > 90)
    ) {
      shiftedCharCode -= 26;
    }

    return shiftedCharCode;
  });

  return shiftedArray;
}

function makeCipher(shiftedArray) {
  return shiftedArray
    .map((shiftedCode) => String.fromCharCode(shiftedCode))
    .join("");
}

export default caesarCipher;
