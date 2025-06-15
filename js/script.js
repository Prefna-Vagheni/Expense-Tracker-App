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

  const totalValue = sum(values);

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
          .join('')}
        <td class="total--expense">${totalValue}</td>
    </tr> 
  `;

  tbody.insertAdjacentHTML('beforeend', rowHtml);

  form.classList.add('hidden');
  if (tbody.rows.length > 0)
    document.querySelector('.total').classList.remove('hidden');
});

// chart
const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
