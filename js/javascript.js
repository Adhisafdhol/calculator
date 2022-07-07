const buttons = document.querySelectorAll('button');
const output = document.querySelector('.output');

buttons.forEach(button => button.addEventListener('click', input))

function transition(e) {
  if (e.target.parentElement.localName === 'button') {
    e.target.parentElement.classList.toggle('on');
  } else {
  e.target.classList.toggle('on');
  }
}
//add transition

function removeTransition (e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('on');
}

buttons.forEach(button => button.addEventListener('transitionend', removeTransition))
//remove transition effect

function changeFontSize() {
  if (output.innerText.length < 12) {
    output.style.fontSize = '2rem';
  } else {
    output.style.fontSize = '1.6rem';
  };
}

function input(e) {
  const target = e.target.innerText;
  if (/[0-9]/.test(target)) {
    if (output.innerText.length < 15) {
    output.innerText = output.innerText + target;
    };
  } else if (e.target.dataset.name = 'delete') {
    output.innerText = output.innerText.slice(0, - 1);
  }

  transition(e);
  changeFontSize();
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, b) {
  if (e.target.innerText === '+') {
    multiply(a, b);
  }
}