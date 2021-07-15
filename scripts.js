const calcularIMC = (event) => {
  event.preventDefault();
  const inputPeso = document.querySelector('#peso');
  const inputAltura = document.querySelector('#altura');
  const inputNome = document.querySelector('#nome');
  const inputGenero = document.querySelector('input[name="gender"]:checked');

  const resposta = document.querySelector('#resposta');

  const peso = inputPeso.value;
  console.log(`Peso: ${peso}`);
  const altura = inputAltura.value;
  console.log(`Altura: ${altura}`);
  const nome = inputNome.value;
  console.log(`Nome: ${nome}`);
  const gender = inputGenero.value;
  console.log(`Genero: ${gender}`);

  inputPeso.classList.remove('error');
  inputAltura.classList.remove('error');
  resposta.classList.remove('resposta-error');

  let error = false;

  if (!peso) {
    inputPeso.classList.add('error');
    error = true;
  }

  if (!altura) {
    inputAltura.classList.add('error');
    error = true;
  }

  if (!nome) {
    inputNome.classList.add('error');
    error = true;
  }

  if (error) {
    resposta.classList.add('resposta-error');
    resposta.innerHTML = 'Please, fill all the form'
    return;
  }

  const imc = peso / (altura * altura);
  console.log(`IMC: ${imc}`);

  let situacao;

  if (gender === 'man') {
    if (imc >= 40) {
      situacao = 'Morbid obesity';
    } else if (imc >= 30 && imc < 40) {
      situacao = 'Obesity'
    } else if (imc >= 25 && imc < 30) {
      situacao = 'Overweight'
    } else if (imc >= 20 && imc < 25) {
      situacao = 'Normal range'
    } else {
      situacao = 'Underweight'
    }
  }

  if (gender === 'woman') {
    if (imc >= 39) {
      situacao = 'Morbid obesity';
    } else if (imc >= 29 && imc < 38,9) {
      situacao = 'Obesity'
    } else if (imc >= 24 && imc < 28,9) {
      situacao = 'Overweight'
    } else if (imc >= 19 && imc < 23,9) {
      situacao = 'Normal range'
    } else {
      situacao = 'Underweight'
    }
  }

  resposta.innerHTML = ` Your BMI is: ${imc.toFixed(2)}kg/m² (${situacao});`

  const item = document.createElement('LI');
  item.innerHTML = `${nome} - ${imc.toFixed(2)}kg/m²`;

  const lista = document.querySelector('#lista');
  lista.appendChild(item);

  const form = document.querySelector('form');
  form.reset();
}