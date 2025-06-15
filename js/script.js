'use strict';

const form = document.querySelector('form');
const submitBtn = document.querySelector('.submit--btn');
const addNewRow = document.querySelector('.add--row');
const tbody = document.querySelector('tbody');

const inputIds = [
  'bills--input',
  'subscriptions---input',
  'entertainment--input',
  'food--drink--input',
  'grocery--input',
  'health--input',
  'other--input',
  'shipping--input',
  'transport--input',
  'travel--input',
  'business--input',
  'gift--input',
];

const sum = (numbers) => numbers.reduce((acc, curr) => acc + curr, 0);

console.log(form);

addNewRow.addEventListener('click', function () {
  form.classList.remove('hidden');
});

submitBtn.addEventListener('click', function (e) {
  e.preventDefault();

  const month = document.getElementById('month').value;
  const values = inputIds.map((id) => +document.getElementById(id).value || 0);
  console.log(values);
  const totalValue = sum(values);

  /*const billValue = document.getElementById('bills--input').value;
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
    +billValue,
    +subscriptionValue,
    +entertainmentValue,
    +foodValue,
    +groceryValue,
    +healthValue,
    +otherValue,
    +shippingValue,
    +transValue,
    +travelValue,
    +businessValue,
    +giftValue,
  ];
  const totalValue = sum(arrValues);*/

  const rowHtml = `
    <tr>
        <td class="month">${month}</td>
        ${values
          .map(
            (value, i) =>
              `<td class='${inputIds[i]
                .replace('--input', '')
                .replace(/--+/g, '--')}'>${value}</td>`
          )
          .join()}
        <td class="total--expense">${totalValue}</td>
    </tr> 
  `;

  tbody.insertAdjacentHTML('beforeend', rowHtml);

  console.log();
  form.classList.add('hidden');
  if (tbody.rows.length > 0)
    document.querySelector('.total').classList.remove('hidden');
});
