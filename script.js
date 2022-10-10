function randomColor() {
  const rgbPart1 = Math.round(Math.random() * 255);
  const rgbPart2 = Math.round(Math.random() * 255);
  const rgbPart3 = Math.round(Math.random() * 255);
  const rgb = `rgb(${rgbPart1}, ${rgbPart2}, ${rgbPart3})`;

  return rgb;
}

const containerColors = document.getElementById('container-color-circles');

function createElementsCircle() {
  for (let index = 0; index < 6; index += 1) {
    const circleElement = document.createElement('button');
    const getRandomColor = randomColor();
    console.log(getRandomColor);
    circleElement.classList.add('ball');
    circleElement.style.backgroundColor = getRandomColor;
    containerColors.appendChild(circleElement);
  }
  document.querySelector('.ball').style.backgroundColor = 'rgb(0, 0, 0)';
}

function getParametersRgbAnswer(getAnswerColor) {
  let position = null;
  let stringAnswer = '';
  for (let index = 0; index < getAnswerColor.length; index += 1) {
    if (getAnswerColor[index] === '(') {
      position = index;
      stringAnswer += getAnswerColor[index];
    } else if (index >= position && position !== null) {
      stringAnswer += getAnswerColor[index];
    }
  }
  return stringAnswer;
}

function getQuestion() {
  const randomIndex = Math.round(Math.random() * 5);
  const buttonElement = document.querySelectorAll('.ball')[randomIndex].style.backgroundColor;
  const colorRgb = getParametersRgbAnswer(buttonElement);
  const colorToGuess = document.getElementById('rgb-color');

  colorToGuess.innerText = colorRgb;
}

function verifyAnswer(event) {
  const getAnswerColor = event.target.style.backgroundColor;
  const Answer = getParametersRgbAnswer(getAnswerColor);
  const colorQuestion = document.getElementById('rgb-color').innerText;
  const boxAnswer = document.querySelector('#answer');
  console.log(Answer);
  console.log(colorQuestion);
  if (Answer === colorQuestion) {
    boxAnswer.innerText = 'Acertou!';
  } else {
    boxAnswer.innerText = 'Errou! Tente novamente!';
  }
}
containerColors.addEventListener('click', verifyAnswer);

function initialize() {
  createElementsCircle();
  getQuestion();
}

function clear() {
  const answerBox = document.getElementById('answer');
  for (let index = 0; index < 6; index += 1) {
    containerColors.firstChild.remove();
  }
  answerBox.innerText = 'Escolha uma cor';
}
const resetButton = document.getElementById('reset-game');

function resetGame() {
  clear();
  initialize();
}
resetButton.addEventListener('click', resetGame);

window.onload = initialize();
