const texts = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  // Add more paragraphs as needed
];

let currentTextIndex;
let startTime;

function startTest(timeLimit) {
  resetTest();
  displayRandomText();
  startTimer(timeLimit);
}

function resetTest() {
  currentTextIndex = 0;
  startTime = 0;
  document.getElementById('user-input').value = '';
  document.getElementById('result-container').innerText = '';
}

function displayRandomText() {
  currentTextIndex = Math.floor(Math.random() * texts.length);
  document.getElementById('text-container').innerText = texts[currentTextIndex];
}

function startTimer(timeLimit) {
  startTime = new Date().getTime();
  updateTimer(timeLimit);
}

function updateTimer(timeLimit) {
  const timerElement = document.getElementById('timer');
  const elapsedTime = Math.floor((new Date().getTime() - startTime) / 1000);
  
  if (elapsedTime >= timeLimit) {
      endTest();
  } else {
      timerElement.innerText = timeLimit - elapsedTime;
      setTimeout(() => updateTimer(timeLimit), 1000);
  }
}

function endTest() {
  const userText = document.getElementById('user-input').value;
  const originalText = texts[currentTextIndex];
  
  const wordsPerMinute = calculateWordsPerMinute(userText, startTime);
  const accuracy = calculateAccuracy(userText, originalText);

  const resultMessage = `Speed: ${wordsPerMinute} WPM | Accuracy: ${accuracy}%`;
  document.getElementById('result-container').innerText = resultMessage;
}

function calculateWordsPerMinute(userText, startTime) {
  const elapsedTimeInSeconds = (new Date().getTime() - startTime) / 1000;
  const wordsTyped = userText.split(/\s+/).length;
  const wordsPerMinute = Math.floor((wordsTyped / elapsedTimeInSeconds) * 60);
  return wordsPerMinute;
}

function calculateAccuracy(userText, originalText) {
  const userWords = userText.split(/\s+/);
  const originalWords = originalText.split(/\s+/);

  let correctWords = 0;

  for (let i = 0; i < Math.min(userWords.length, originalWords.length); i++) {
      if (userWords[i] === originalWords[i]) {
          correctWords++;
      }
  }

  const accuracy = (correctWords / originalWords.length) * 100;
  return accuracy.toFixed(2);
}
