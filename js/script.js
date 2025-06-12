'use strict';

const form = document.querySelector('form');
const submitBtn = document.querySelector('.submit--btn');
const addNewRow = document.querySelector('.add--row');

addNewRow.addEventListener('click', function () {
  form.classList.toggle('hidden');
});
