'use strict';

const form = document.querySelector('form');
const submitBtn = document.querySelector('.submit--btn');
const addNewRow = document.querySelector('.add--row');
const tbody = document.querySelector('tbody');

const sum = function (num) {
  return num.reduce((acc, curr) => acc + curr, 0);
};

console.log(form);

addNewRow.addEventListener('click', function () {
  form.classList.remove('hidden');
});

submitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(form);

  const month = document.getElementById('month').value;
  const billValue = document.getElementById('bills--input').value;
  const subscriptionValue = document.getElementById(
    'subscriptions---input'
  ).value;
  const entertainmentValue = document.getElementById(
    'entertainment--input'
  ).value;
  const foodValue = document.getElementById('food--drink--input').value;
  const groceryValue = document.getElementById('grocery--input').value;
  const healthValue = document.getElementById('health--input').value;
  const otherValue = document.getElementById('other--input').value;
  const shippingValue = document.getElementById('shipping--input').value;
  const transValue = document.getElementById('transport--input').value;
  const travelValue = document.getElementById('travel--input').value;
  const businessValue = document.getElementById('business--input').value;
  const giftValue = document.getElementById('gift--input').value;
  const arrValues = [
    month,
    billValue,
    subscriptionValue,
    entertainmentValue,
    foodValue,
    groceryValue,
    healthValue,
    otherValue,
    shippingValue,
    transValue,
    travelValue,
    businessValue,
    giftValue,
  ];
  const totalValue = sum(arrValues);

  const html = `
    <tr>
        <td class="month">${month}</td>
        <td class="bill">${billValue}</td>
        <td class="subscriptions">${subscriptionValue}</td>
        <td class="entertainment">${entertainmentValue}</td>
        <td class="food--drink">${foodValue}</td>
        <td class="grocery">${groceryValue}</td>
        <td class="health--wealth">${healthValue}</td>
        <td class="other">${otherValue}</td>
        <td class="shipping">${shippingValue}</td>
        <td class="transport">${transValue}</td>
        <td class="travel">${travelValue}</td>
        <td class="business">${businessValue}</td>
        <td class="gift">${giftValue}</td>
        <td class="total--expense">${totalValue}</td>
    </tr> 
  `;

  tbody.insertAdjacentHTML('beforeend', html);

  console.log();
  form.classList.add('hidden');
  if (tbody.rows.length > 0)
    document.querySelector('.total').classList.remove('hidden');
});
