function toggleSecondInput() {
    var operation = document.getElementById('selectOperation').value;
    var inputNumber2 = document.getElementById('inputNumber2');
    var labelNumber1 = document.getElementById('labelNumber1');
    var labelNumber2 = document.getElementById('labelNumber2');
    
    if (operation === 'mmc' || operation === 'mdc' || operation === 'modulo') {
      inputNumber2.style.display = 'inline';
      labelNumber2.style.display = 'inline';
      if (operation === 'modulo') {
        labelNumber1.textContent = 'Insira o dividendo:';
        labelNumber2.textContent = 'Insira o divisor:';
      } else {
        labelNumber1.textContent = 'Insira um número:';
        labelNumber2.textContent = 'Insira outro número:';
      }
    } else {
      inputNumber2.style.display = 'none';
      labelNumber2.style.display = 'none';
      labelNumber1.textContent = 'Insira um número:';
    }
  }
  
  function verificarNumero() {
    var number1 = parseInt(document.getElementById('inputNumber').value);
    var number2 = parseInt(document.getElementById('inputNumber2').value);
    var output = document.getElementById('output');
    output.innerHTML = '';
  
    if (isNaN(number1) || (document.getElementById('inputNumber2').style.display === 'inline' && isNaN(number2))) {
      output.innerHTML = 'Por favor, insira números válidos.';
      return;
    }
  
    var operation = document.getElementById('selectOperation').value;
    var result = '';
  
    switch (operation) {
      case 'parImpar':
        result = 'Par ou Ímpar: ' + (number1 % 2 === 0 ? 'Par' : 'Ímpar');
        break;
      case 'primoComposto':
        result = 'Primo ou Composto: ' + (ePrimo(number1) ? 'Primo' : 'Composto');
        break;
      case 'modulo':
        result = 'Módulo de ' + number1 + ' por ' + number2 + ': ' + (number1 % number2);
        break;
      case 'fatoracao':
        result = 'Fatoração: ' + fatoracao(number1).join(', ');
        break;
      case 'mmc':
        result = 'MMC de ' + number1 + ' e ' + number2 + ': ' + calcularMMC(number1, number2);
        break;
      case 'mdc':
        result = 'MDC de ' + number1 + ' e ' + number2 + ': ' + calcularMDC(number1, number2);
        break;
      default:
        result = 'Selecione uma operação válida.';
        break;
    }
  
    output.innerHTML = result;
  }
  
  function ePrimo(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
  }
  
  function fatoracao(num) {
    let factors = [];
    let divisor = 2;
  
    while (num > 2) {
      if (num % divisor === 0) {
        factors.push(divisor);
        num /= divisor;
      } else {
        divisor++;
      }
    }
    
    return factors;
  }
  
  function calcularMMC(a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    let mmc = max;
  
    while (mmc % min !== 0) {
      mmc += max;
    }
    
    return mmc;
  }
  
  function calcularMDC(a, b) {
    while (b) {
      var temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  