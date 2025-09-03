"use strict"
function solveEquation(a, b, c) {
  let arr = [];

  let d = b ** 2 - 4 * a * c;

  if (d < 0) {

  } else if (d === 0) {
    let x = -b / (2 * a);
    arr.push(x);
  } else {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  }

  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  let monthly = percent / 100 / 12;
  let loanAmount = amount - contribution;

  if (loanAmount <= 0) {
    return 0;
  }

  let payment = loanAmount * (monthly + (monthly / ((1 + monthly) ** countMonths - 1)));

  let fullAmount = payment * countMonths;

  fullAmount = Number(fullAmount.toFixed(2));

  return fullAmount;

}