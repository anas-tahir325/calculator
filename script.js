let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    let value = e.target.innerHTML;

    if (value === '=') {
      try {
        string = eval(string).toString();
      } catch {
        string = "Error";
      }
    } else if (value === 'C') {
      string = "";
    } else if (value === '⌫') {
      string = string.slice(0, -1);
    } else if (value === '🌙') {
      document.body.classList.toggle('dark');
      return; // don't update inputbox
    } else {
      string += value;
    }

    input.value = string;
  });
});
