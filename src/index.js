const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let arr = [];
  let idx = 0;
  let str = String(expr).split("");

  for (let i = 0; i < str.length; i = i + 2) {
    if (i % 10 === 0 && i !== 0) {
      idx++;
    }
    arr.push([]);
    if (str[i] == 0 && str[i + 1] == 0) {
      continue;
    }
    arr[idx].push(str[i] + str[i + 1]);
  }

  arr = arr.map((e) => {
    if (e.includes("**")) return " ";
    let el = e.map((g) => (g === "10" ? "." : "-"));
    return MORSE_TABLE[el.join("")];
  });

  return arr.filter((f) => f !== undefined).join('')
}

module.exports = {
  decode,
};
