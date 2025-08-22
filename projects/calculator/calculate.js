
  let display = '';

  function appendValue(val) {
    display += val;
    document.querySelector('#display').value = display;
  }

  function clearDisplay() {
    display = '';
    document.querySelector('#display').value = display;
  }

  function calculateResult() {
    try {
      display = eval(display);
      document.querySelector('#display').value = display;
    } catch {
      document.querySelector('#display').value = "Error";
    }
  }

