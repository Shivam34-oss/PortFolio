    function convertText(type) {
      const input = document.getElementById('inputText').value;
      let result = '';
      if (type === 'upper') result = input.toUpperCase();
      else if (type === 'lower') result = input.toLowerCase();
      else if (type === 'reverse') result = input.split('').reverse().join('');
      document.getElementById('outputText').textContent = result;
    }

    function clearText() {
      document.getElementById('inputText').value = '';
      document.getElementById('outputText').textContent = '';
    }