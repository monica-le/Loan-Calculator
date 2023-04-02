window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    // explicitly a num value
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  // set default values into inputs
  const values = {amount: 10000, years: 10, rate: 4.5};
  // select the inputted loan amount
  const amountUI = document.querySelector("#loan-amount");
  // set the inputed amount to be the default amount
  amountUI.value = values.amount;
  const yearsUI = document.querySelector("#loan-years");
  yearsUI.value = values.years;
  const rateUI = document.querySelector("#loan-rate");
  rateUI.value = values.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = (values.rate / 100) / 12;
  const n = values.years * 12;
  // calculate monthly payment
  return (
    (values.amount * monthlyRate) / 
    (1 - Math.pow((1 + monthlyRate), -n))
  // fixing to 2 decimal places
  ).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  // select the monthly UI payment
  const monthlyUI = document.querySelector("#montly-payment");
  // update the UI to show the value
  monthlyUI.innerText = "$" + monthly;
}
console.log("hi")