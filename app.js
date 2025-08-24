// const display = document.getElementById('display');
//     const buttons = document.querySelectorAll('.buttons button');

//     let currentInput = '';
//     let resetNext = false;

//     buttons.forEach(button => {
//       button.addEventListener('click', () => {
//         const value = button.textContent;

//         if (value === 'C') {
//           currentInput = '';
//           display.textContent = '0';
//         } else if (value === '=') {
//           try {
//             currentInput = eval(currentInput).toString();
//             display.textContent = currentInput;
//             resetNext = true;
//           } catch {
//             display.textContent = 'Error';
//             currentInput = '';
//           }
//         } else {
//           if (resetNext && !isNaN(value)) {
//             currentInput = value;
//             resetNext = false;
//           } else {
//             currentInput += value;
//           }
//           display.textContent = currentInput;
//         }
//       });
//     });






const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.buttons button');

    let currentInput = '';
    let resetNext = false;

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
          currentInput = '';
          display.textContent = '0';
        } else if (value === '=') {
          try {
            currentInput = eval(currentInput).toString();
            display.textContent = currentInput;
            resetNext = true;
          } catch {
            display.textContent = 'Error';
            currentInput = '';
          }
        } else {
          if (resetNext && !isNaN(value)) {
            currentInput = value;
            resetNext = false;
          } else {
            currentInput += value;
          }
          display.textContent = currentInput;
        }
      });
    });