function showDigitsOnOperands() {
  const operands = document.querySelector('.operands');
  const digits = document.querySelectorAll('#digits > div');
  for (let i = 0; i < digits.length; i++) {
    digits[i].addEventListener('click', function() {
      if (digits[i].innerHTML === 'CE') {
        console.log("Clear Entry");
      }
      else if (digits[i].innerHTML === 'C') {
        console.log("Clear");
      }
      else if (digits[i].innerHTML === '=') {
        console.log("Result is...");
      }
      else {
        if (operands.innerHTML === "0") {
          operands.innerHTML = this.innerHTML;
        } else {
          operands.innerHTML += this.innerHTML;
        }
      }
    });
  }
}

showDigitsOnOperands();
