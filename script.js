const circles = document.querySelectorAll('.circles');
const colorDisplay = document.querySelector('#color-display');
const msgDisplay = document.querySelector('#result');
const h1 = document.querySelector('h1');
const reset = document.querySelector('#reset');
const easy = document.querySelector('#easy');
const hard = document.querySelector('#hard');

const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const generateRandomColors = ((num) => {
  const arr = [];
  for (let i = 0; i < num; i += 1) {
    arr.push(randomColor());
  }
  return arr;
});

let colors = generateRandomColors(6);

function pickColor() {
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

let pickedColor = pickColor();

const changeColor = (color) => {
  for (let i = 0; i < circles.length; i += 1) {
    circles[i].style.backgroundColor = color;
  }
};

colorDisplay.textContent = pickedColor;

const compareColors = (e) => {
  const clickedColor = e.target.style.backgroundColor;
  if (clickedColor === pickedColor) {
    msgDisplay.textContent = 'YAY! THAT IS RIGHT!';
    msgDisplay.style.color = pickedColor;
    reset.textContent = 'Play again?';
    changeColor(clickedColor);
    h1.style.backgroundColor = clickedColor;
  } else {
    msgDisplay.textContent = 'Nope. Try again!';
    e.target.style.backgroundColor = 'black';
  }
};

for (let i = 0; i < circles.length; i += 1) {
  circles[i].style.backgroundColor = colors[i];
  circles[i].addEventListener('click', compareColors);
}

const resetGame = () => {
  msgDisplay.style.color = 'black';
  msgDisplay.textContent = '';
  reset.textContent = 'New game';
  h1.style.backgroundColor = 'BurlyWood';
  if (easy.classList.contains('selected')) {
    colors = generateRandomColors(3);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < circles.length; i += 1) {
      if (colors[i]) {
        circles[i].style.backgroundColor = colors[i];
      } else {
        circles[i].style.display = 'none';
      }
    }
  } else {
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < circles.length; i += 1) {
      circles[i].style.backgroundColor = colors[i];
      circles[i].style.display = 'block';
    }
  }
};

reset.addEventListener('click', resetGame);

easy.addEventListener('click', () => {
  hard.classList.remove('selected');
  easy.classList.add('selected');
  resetGame();
});

hard.addEventListener('click', () => {
  easy.classList.remove('selected');
  hard.classList.add('selected');
  resetGame();
});
