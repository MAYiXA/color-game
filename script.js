const colors = [
  'rgb(66, 134, 244)',
  'rgb(206, 66, 244)',
  'rgb(244, 65, 107)',
  'rgb(244, 232, 65)',
  'rgb(124, 244, 65)',
  'rgb(73, 251, 255)',
];

const squares = document.querySelectorAll('.square');
const colorDisplay = document.querySelector('#color-display');
const msgDisplay = document.querySelector('#result');
const randomColor = (() => {
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
});
const secretColor = randomColor();

colorDisplay.textContent = secretColor;

for (let i = 0; i < squares.length; i += 1) {
  // inital colors for the squares
  squares[i].style.backgroundColor = colors[i];

  // click listeners
  squares[i].addEventListener('click', () => {
    // get color of picked square
    const clickedColor = squares[i].style.backgroundColor;

    // compare color to pickedColor
    if (clickedColor === secretColor) {
      msgDisplay.textContent = 'YAY! YOU GOT IT RIGHT!';
      const changeColor = (color) => {
        for (let w = 0; w < squares.length; w += 1) {
          squares[w].style.backgroundColor = color;
        }
      };
      changeColor(clickedColor);
    } else {
      msgDisplay.textContent = 'Nope. Try again!';
      squares[i].style.backgroundColor = '#333';
    }
  });
}
