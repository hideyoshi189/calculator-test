const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click',() => {
      const buttonText = button.textContent;

      if (buttonText === 'C') {
        display.value = '';
      } else if (buttonText === '=') {
        display.value = eval(display.value);
      } else {
        display.value += buttonText;
      }
    });
});