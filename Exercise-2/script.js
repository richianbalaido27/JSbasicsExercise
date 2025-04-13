function generateFullName() {
    const fname = document.getElementById('fname').value.trim();
    const mname = document.getElementById('mname').value.trim();
    const lname = document.getElementById('lname').value.trim();
  
    if (!fname || !mname || !lname) {
      alert("Please fill in all fields.");
      return;
    }
  
    const fullName = `${fname} ${mname} ${lname}`;
    document.getElementById('fullname').textContent = fullName;
  }
  
  function clearFields() {
    document.getElementById('fname').value = '';
    document.getElementById('mname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('fullname').textContent = '';
  }
  