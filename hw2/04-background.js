// Add your code here
const body = document.getElementById('background');
const timeInterval = document.getElementById('interval');
const changeColorBtn = document.getElementById('changeColorBtn');

const colorChange = function randomColorChangeForBodyBackground() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const a = 0.5;
  body.style.backgroundColor = `rgb(${r}, ${g}, ${b}, ${a})`;
};
let colorChangeInterval = setInterval(colorChange, 3000);

const handleIntervalChange = function handleUserIntervalChange() {
  if (changeColorBtn.innerText === 'Start') {
    if (timeInterval.value > 0) {
      clearInterval(colorChangeInterval);
      colorChangeInterval = setInterval(colorChange, timeInterval.value * 1000);
      changeColorBtn.innerText = 'Stop';
      changeColorBtn.classList.remove('btn-primary');
      changeColorBtn.classList.add('btn-danger');
    }
  } else {
    clearInterval(colorChangeInterval);
    changeColorBtn.innerText = 'Start';
    changeColorBtn.classList.remove('btn-danger');
    changeColorBtn.classList.add('btn-primary');
  }
};
window.onload = colorChangeInterval;
changeColorBtn.addEventListener('click', handleIntervalChange);
