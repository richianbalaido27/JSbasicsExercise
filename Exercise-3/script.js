let numbers = [];

function insertNumber() {
  const input = document.getElementById("numberInput");
  const num = parseInt(input.value);

  if (!isNaN(num)) {
    numbers.push(num);
    updateDisplay();
    input.value = '';
  } else {
    alert("Please enter a valid number.");
  }
}

function clearAll() {
  numbers = [];
  updateDisplay();
}

function updateDisplay() {
  const listDiv = document.getElementById("numberList");
  listDiv.innerHTML = numbers.map(n => `<div>${n}</div>`).join("");

  if (numbers.length === 0) {
    document.getElementById("sum").textContent = "0";
    document.getElementById("highest").textContent = "-";
    document.getElementById("lowest").textContent = "-";
    return;
  }

  const sum = numbers.reduce((a, b) => a + b, 0);
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);

  document.getElementById("sum").textContent = sum;
  document.getElementById("highest").textContent = max;
  document.getElementById("lowest").textContent = min;
}
