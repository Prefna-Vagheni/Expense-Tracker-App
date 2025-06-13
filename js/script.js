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
  const groceryValue = document.getElementById('grocery--input');
  const healthValue = document.getElementById('health--input');
  const otherValue = document.getElementById('other--input');
  const shippingValue = document.getElementById('shipping--input');
  const transValue = document.getElementById('transport--input');
  const travelValue = document.getElementById('travel--input');
  const businessValue = document.getElementById('business--input');
  const giftValue = document.getElementById('gift--input');
  const totalValue = document.getElementById('total--input');

  console.log();
  form.classList.add('hidden');
});
