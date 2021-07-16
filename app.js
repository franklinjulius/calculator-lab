import { add } from './utilis.js';
import { subtract } from './utilis.js';
import { multiply } from './utilis.js';
import { divide } from './utilis.js';

const addNumOne = document.getElementById('add-num1');
const addNumTwo = document.getElementById('add-num2');
const calculateButton = document.getElementById('add');
const getResult = document.getElementById('add-result');


calculateButton.addEventListener('click', () => {

  const numOne = Number(addNumOne.value);
  const numTwo = Number(addNumTwo.value);
  const sum = add(numOne, numTwo);
  getResult.textContent = sum;

});

const subNumOne = document.getElementById('subtract-numOne');
const subNumTwo = document.getElementById('subtract-numTwo');
const subButton = document.getElementById('subtract-btn');
const subResult = document.getElementById('subtract-result');

subButton.addEventListener('click', () => {
  const numOne = Number(subNumOne.value);
  const numTwo = Number(subNumTwo.value);
  const difference = subtract(numOne, numTwo);
  subResult.textContent = difference;

});

const mulNumOne = document.getElementById('multiply-num1');
const mulNumTwo = document.getElementById('multiply-num2');
const multBtn = document.getElementById('multiply-btn');
const multResult = document.getElementById('multiply-result');

multBtn.addEventListener('click', () => {

  const numOne = Number(mulNumOne.value);
  const numTwo = Number(mulNumTwo.value);
  const times = multiply(numOne, numTwo);
  multResult.textContent = times;
});



const divNumOne = document.getElementById('divide-num1');
const divNumTwo = document.getElementById('divide-num2');
const divButton = document.getElementById('divide-btn');
const divResult = document.getElementById('divide-result');

divButton.addEventListener('click', () => {
  const numOne = Number(divNumOne.value);
  const numTwo = Number(divNumTwo.value);
  const divideBy = divide(numOne, numTwo);
  divResult.textContent = divideBy;
});
