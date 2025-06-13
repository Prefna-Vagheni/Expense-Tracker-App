'use strict';

const form = document.querySelector('form');
const submitBtn = document.querySelector('.submit--btn');
const addNewRow = document.querySelector('.add--row');

console.log(form);

addNewRow.addEventListener('click', function () {
  form.classList.remove('hidden');
});

submitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(form);

  const billValue = document.getElementById('bills--input').value;
  const subscriptionValue = document.getElementById(
    'subscriptions---input'
  ).value;
  const entertainmentValue = document.getElementById(
    'entertainment--input'
  ).value;
  const foodValue = document.getElementById('food--drink--input');

  console.log();
  form.classList.add('hidden');
});
