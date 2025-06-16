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

const emptyFields = () => {
  document.getElementById('month').value = '';
  inputIds.map((val) => (document.getElementById(val).value = ''));
};

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

  emptyFields();

  form.classList.add('hidden');
  if (tbody.rows.length > 0)
    document.querySelector('.total').classList.remove('hidden');
});

// chart
const ctx = document.getElementById('myChart');

(async function loadData() {
  try {
    const res = await fetch('data.json');
    if (!res.ok) throw new Error(`Problem with http! status: ${res.status}`);
    const data = await res.json();
    createChart(data);
  } catch (err) {
    console.error('Error loading data:', err);
  }
})();

// fetch('data.json')
//   .then((res) => {
//     if (!res.ok) throw new Error('Failed to fetch data');

//     return res.json();
//   })
//   .then((data) => createChart(data));

const createChart = function (data) {
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: data.map((row) => row.month),
      datasets: [
        {
          label: '# of Votes',
          data: data.map((row) => row.income),
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
      maintainAspectRatio: false,
    },
  });
};
