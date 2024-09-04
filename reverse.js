const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

for (let i = 0; i < Math.floor(colors.length / 2); i++) {
  // Swap elements
  const temp = colors[i];
  colors[i] = colors[colors.length - 1 - i];
  colors[colors.length - 1 - i] = temp;
}

console.log(colors);
