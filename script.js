// Select DOM elements
const countDisplay = document.getElementById('countDisplay');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');

// Initialize count variable
let count = 0;

/**
 * Updates the DOM with the current count
 */
function updateDisplay() {
  countDisplay.textContent = count;
}

// Event listener for Increment
incrementBtn.addEventListener('click', () => {
  count++;
  updateDisplay();
});

// Event listener for Decrement
decrementBtn.addEventListener('click', () => {
  if (count > 0) {
    count--;
    updateDisplay();
  }
});

// Event listener for Reset
resetBtn.addEventListener('click', () => {
  count = 0;
  updateDisplay();
});
