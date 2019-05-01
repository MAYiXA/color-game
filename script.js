const circles = document.querySelectorAll('.circles');
const colorDisplay = document.querySelector('#color-display');
const msgDisplay = document.querySelector('#result');
const h1 = document.querySelector('h1');

const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const generateRandomColors = ((num) => {
  const arr = [];
  for (let j = 0; j < num; j += 1) {
    arr.push(randomColor());
  }
  return arr;
});

const colors = generateRandomColors(6);

function pickColor() {
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

const pickedColor = pickColor();

const changeColor = (color) => {
  for (let w = 0; w < circles.length; w += 1) {
    circles[w].style.backgroundColor = color;
  }
};

colorDisplay.textContent = pickedColor;

for (let i = 0; i < circles.length; i += 1) {
  // inital colors for the squares
  circles[i].style.backgroundColor = colors[i];

  // click listeners
  circles[i].addEventListener('click', () => {
    // get color of picked square
    const clickedColor = circles[i].style.backgroundColor;

    // compare color to pickedColor
    if (clickedColor === pickedColor) {
      msgDisplay.textContent = 'YAY! YOU GOT IT RIGHT!';
      changeColor(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      msgDisplay.textContent = 'Nope. Try again!';
      circles[i].style.backgroundColor = 'black';
    }
  });
}
