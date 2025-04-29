//your JS code here. If required.
 document.addEventListener('DOMContentLoaded', () => {
      const inputs = document.querySelectorAll('.code-container .code');
      
      inputs.forEach((input, idx) => {
        // Only allow digits, auto-advance on input
        input.addEventListener('input', e => {
          const val = e.target.value;
          if (/^[0-9]$/.test(val)) {
            // move to next
            if (idx < inputs.length - 1) {
              inputs[idx + 1].focus();
            }
          } else {
            // invalid character → clear
            e.target.value = '';
          }
        });
        // On backspace, if empty, move focus back
        input.addEventListener('keydown', e => {
          if (e.key === 'Backspace') {
            if (e.target.value === '' && idx > 0) {
              inputs[idx - 1].focus();
            }
          }
        });
      });
    });