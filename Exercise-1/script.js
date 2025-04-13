function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
  
    if (isNaN(num1) || isNaN(num2)) {
      alert("Please enter valid numbers.");
      return;
    }
  
    document.getElementById('sum').textContent = num1 + num2;
    document.getElementById('diff').textContent = num1 - num2;
    document.getElementById('prod').textContent = num1 * num2;
    document.getElementById('quot').textContent = num2 !== 0 ? (num1 / num2).toFixed(2) : 'Cannot divide by 0';
  }
  
  function clearFields() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('sum').textContent = '';
    document.getElementById('diff').textContent = '';
    document.getElementById('prod').textContent = '';
    document.getElementById('quot').textContent = '';
  }
  