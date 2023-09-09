"use strict";
const billEl = document.getElementById("bill");
const tipRangeEl = document.getElementById("tip-range");
const personRangeEl = document.getElementById("person-range");
const tipEl = document.getElementById("tip-amount");
const total = document.getElementById("total");
const tipValEl = document.getElementById("tip-win");
const personValEl = document.getElementById("person-win");
const showEl = document.getElementById("show");

//global variable
let bill, tipPercentage, NOP;
//function
const init = () => {
  bill = parseFloat(0).toFixed(2);
  tipPercentage = 5;
  NOP = 1;
  tipValEl.innerText = `${tipPercentage}%`;
  personValEl.innerText = NOP;
};
const calculateTip = () => {
  let tip = Number(parseFloat((tipPercentage / 100) * bill).toFixed(2));
  let tipTotal = Number(parseFloat(tip * NOP).toFixed(2));
  let totalAmount = parseFloat(bill + tipTotal).toFixed(2);

  tipEl.innerText = `₹ ${tipTotal}`;
  total.innerText = `₹ ${totalAmount}`;
  let message = `<p class='per'>Tips per Person <span>₹ ${tip}</span></p>`;
  showEl.innerHTML = message;
};

//event listener
billEl.addEventListener("input", () => {
  bill = Number(billEl.value);
  calculateTip();
});
tipRangeEl.addEventListener("change", () => {
  tipPercentage = Number(tipRangeEl.value);
  tipValEl.innerText = `${tipPercentage}%`;
  calculateTip();
});
personRangeEl.addEventListener("change", () => {
  NOP = personRangeEl.value;
  personValEl.innerText = NOP;
  calculateTip();
});

//init
init();
