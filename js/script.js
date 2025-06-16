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
const idToKeyMap = {
  'bills--input': 'bill',
  'subscriptions---input': 'subs',
  'entertainment--input': 'ent',
  'food--drink--input': 'food',
  'grocery--input': 'grocery',
  'health--input': 'health',
  'other--input': 'other',
  'shipping--input': 'shipping',
  'transport--input': 'transport',
  'travel--input': 'travel',
  'business--input': 'business',
  'gift--input': 'gift',
};

let genTotal = {
  bill: [],
  subs: [],
  ent: [],
  food: [],
  grocery: [],
  health: [],
  other: [],
  shipping: [],
  transport: [],
  travel: [],
  business: [],
  gift: [],
};

const sum = (numbers) => numbers.reduce((acc, curr) => acc + curr, 0);
let count = 0;

const emptyFields = () => {
  document.getElementById('month').value = '';
  inputIds.map((val) => (document.getElementById(val).value = ''));
};
const addRow = function (values) {
  values.forEach((val, i) => {
    const id = inputIds[i];
    const key = idToKeyMap[id];
    const num = parseFloat(val);

    if (!isNaN(num)) {
      genTotal[key].push(num);
    }
  });
};
const getTotals = function () {
  const totals = {};

  for (const key in genTotal) {
    totals[key] = genTotal[key].reduce((sum, val) => sum + val, 0);
  }

  return totals;
};

addNewRow.addEventListener('click', function () {
  form.classList.remove('hidden');
});

submitBtn.addEventListener('click', function (e) {
  e.preventDefault();

  const month = document.getElementById('month').value;
  const values = inputIds.map((id) => +document.getElementById(id).value || 0);
  addRow(values);
  const rowTotal = getTotals();
  const lastTotal = Object.values(rowTotal).reduce((acc, cur) => acc + cur, 0);
  console.log(lastTotal);

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
        <td class="total--input">${totalValue}</td>
    </tr> 
  `;

  tbody.insertAdjacentHTML('beforeend', rowHtml);

  emptyFields();

  form.classList.add('hidden');
  if (tbody.rows.length > 0) {
    const tfootHTMTL = `
        <tr class="total hidden">
            <td>Total</td>
            <td class="bill">${rowTotal.bill}</td>
            <td class="bill">${rowTotal.subs}</td>
            <td class="bill">${rowTotal.ent}</td>
            <td class="bill">${rowTotal.food}</td>
            <td class="bill">${rowTotal.grocery}</td>
            <td class="bill">${rowTotal.health}</td>
            <td class="bill">${rowTotal.other}</td>
            <td class="bill">${rowTotal.shipping}</td>
            <td class="bill">${rowTotal.transport}</td>
            <td class="bill">${rowTotal.travel}</td>
            <td class="bill">${rowTotal.business}</td>
            <td class="bill">${rowTotal.gift}</td>
            <td class="bill">${rowTotal.total}</td>
        </tr>

    `;
    document.querySelector('tfoot').insertAdjacentHTML('beforeend', tfootHTMTL);
    document.querySelector('.total').classList.remove('hidden');
  }
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
