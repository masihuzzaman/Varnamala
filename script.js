// script.js

document.addEventListener("DOMContentLoaded", function () {
  const lettersContainer = document.getElementById("letters-container");

  // Array of Hindi letters
  const hindiAlphabet =
    "अ आ इ ई उ ऊ ए ऐ ओ औ क ख ग घ च छ ज झ ट ठ ड ढ ण त थ द ध न प फ ब भ म य र ल व श ष स ह".split(
      " "
    );

  // Create and append letter elements
  hindiAlphabet.forEach((letter) => {
    const letterElement = document.createElement("div");
    letterElement.classList.add("letter");
    letterElement.textContent = letter; // Hindi letter
    lettersContainer.appendChild(letterElement);

    // Add click event listener to each letter
    letterElement.addEventListener("click", function () {
      enlargeLetter(this);
      playLetterSound(letter);
      blinkNextLetter(this);
      changeBackgroundColor(this);
    });
  });

  // Function to enlarge clicked letter
  function enlargeLetter(letterElement) {
    letterElement.style.fontSize = "3em"; // Adjusted font size for smaller screens
  }

  // Function to play letter sound
  function playLetterSound(letter) {
    const audio = document.getElementById("audio-letter");
    audio.src = `sounds/${letter}.mp3`; // Assuming you have audio files named after Hindi letters
    audio.play();
  }

  // Function to make next letter blink
  function blinkNextLetter(currentLetterElement) {
    const letters = document.querySelectorAll(".letter");
    const currentIndex = Array.from(letters).indexOf(currentLetterElement);
    const nextIndex =
      currentIndex === letters.length - 1 ? 0 : currentIndex + 1;
    const nextLetterElement = letters[nextIndex];

    nextLetterElement.classList.add("blink");

    setTimeout(function () {
      nextLetterElement.classList.remove("blink");
    }, 1000);
  }

  // Function to change background color to a random eye-soothing color
  function changeBackgroundColor(element) {
    const colors = ["#87CEEB", "#90EE90", "#FFB6C1", "#FFD700", "#ADD8E6"]; // Add more colors as needed
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    element.style.backgroundColor = randomColor;
  }
});
