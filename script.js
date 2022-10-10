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
}

function initialize() {
  createElementsCircle();
}

window.onload = initialize();
