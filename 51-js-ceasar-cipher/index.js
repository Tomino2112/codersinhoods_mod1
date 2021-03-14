const alphabet =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*.";
const cipher = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm!@#$%^&*.,";

const rot13 = (string, lettersToInput, lettersToGive) => {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    let stringIndex = lettersToInput.indexOf(string[i]);
    //  console.log(stringIndex);
    let alphabetValue = lettersToGive[stringIndex];
    // console.log(alphabetValue);
    if (alphabetValue === undefined) {
      newString += " ";
    } else {
      newString += alphabetValue;
    }
  }

  newString = String(newString);
  return newString;
};

const encryptBtnEl = document.getElementById("encrypt");
const decryptBtnEl = document.getElementById("decrypt");
const inputString = document.querySelector("textarea");
const resultArea = document.querySelector(".result");

encryptBtnEl.addEventListener("click", () => {
  resultArea.innerText = rot13(inputString.value, alphabet, cipher);
});
decryptBtnEl.addEventListener("click", () => {
  resultArea.innerText = rot13(inputString.value, cipher, alphabet);
});

// console.log(rot13("Fbzr enaqbz grkg!",cipher,alphabet));
