// JavaScript
const budgetForm = document.getElementById('budgetForm');
const resultSection = document.getElementById('resultSection');
const leftoverAmount = document.getElementById('leftoverAmount');

budgetForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  // Get user input values
  const startAmount = parseFloat(document.getElementById('startAmount').value);
  const weekBudget = parseFloat(document.getElementById('week').value);
  const monthBudget = parseFloat(document.getElementById('month').value);
  const yearBudget = parseFloat(document.getElementById('year').value);

  // Calculate leftover amount
  const totalBudget = weekBudget + monthBudget + yearBudget;
  const leftover = startAmount - totalBudget;

  // Display the leftover amount
  leftoverAmount.textContent = `Leftover Amount: $${leftover.toFixed(2)}`;

  // Show the result section
  resultSection.classList.remove('hidden');
});
