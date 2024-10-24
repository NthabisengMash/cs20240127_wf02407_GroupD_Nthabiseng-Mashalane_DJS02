const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const dividendInput = form.querySelector("[name='dividend']");
  const dividerInput = form.querySelector("[name='divider']");
  const dividend = parseFloat(dividendInput.value); // Parse to number
  const divider = parseFloat(dividerInput.value); // Parse to number

  // Validation for missing values
  if (!dividend || !divider) {
    result.textContent = "Division not performed. Both values are required in inputs. Try again.";
    return;
  }

  // Validation for division by zero
  if (divider === 0) {
    console.error("Division by zero attempted.");
    result.textContent = "Division not performed. Invalid number provided. Try again.";
    return;
  }

  // Perform integer division (using Math.floor)
  const quotient = Math.floor(dividend / divider);
  result.textContent = quotient;
});

// Error handling for non-numeric input (optional)
form.addEventListener("input", (event) => {
  const target = event.target;
  if (isNaN(parseFloat(target.value))) {
    alert("Please enter only numbers for dividend and divider.");
    target.value = ""; // Clear the input
  }
});