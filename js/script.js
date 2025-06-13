'use strict';

const form = document.querySelector('form');
const submitBtn = document.querySelector('.submit--btn');
const addNewRow = document.querySelector('.add--row');

console.log(form);

addNewRow.addEventListener('click', function () {
  form.classList.remove('hidden');
});

submitBtn.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(form);

  form.classList.add('hidden');
});
