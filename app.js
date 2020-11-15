// 1. Grab the DOM elements
const textInput = document.getElementById('textInput');
const textOutput = document.getElementById('textOutput');
const vowels = ['e', 'i', 'a', 'o', 'u'];
const ending = 'ay';

// Event Listeners
textInput.addEventListener('keyup', (e) => {
  const input = e.target.value;
  let output = '';
  console.log(input);
  // starts with vowel? add ending
  if (vowels.includes(input[0])) {
    output = input + ending;
  } else {
    let consonants = '';
    for (let i = 0; i < input.length; i++) {
      if (vowels.includes(input[i])) {
        break;
      }
      consonants += input[i];
    }
    output = input.substring(consonants.length) + consonants + ending;
  }
  textOutput.innerText = output;
});
