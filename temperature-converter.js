// Temperature Converter Module
const temperatureForm = document.createElement('form');

// Create the structure of the form
const temperatureLabel = document.createElement('label');
temperatureLabel.setAttribute('for', 'temperature-value');
temperatureLabel.textContent = 'Enter value:';

const temperatureInput = document.createElement('input');
temperatureInput.setAttribute('type', 'number');
temperatureInput.setAttribute('id', 'temperature-value');
temperatureInput.setAttribute('required', true);
temperatureInput.setAttribute('placeholder', 'Temperature');

const inputUnitLabel = document.createElement('label');
inputUnitLabel.setAttribute('for', 'temperature-unit-from');
inputUnitLabel.textContent = 'Convert from:';

const inputUnitSelect = document.createElement('select');
inputUnitSelect.setAttribute('id', 'temperature-unit-from');
inputUnitSelect.innerHTML = `
  <option value="celsius">Celsius</option>
  <option value="fahrenheit">Fahrenheit</option>
  <option value="kelvin">Kelvin</option>
`;

const outputUnitLabel = document.createElement('label');
outputUnitLabel.setAttribute('for', 'temperature-unit-to');
outputUnitLabel.textContent = 'Convert to:';

const outputUnitSelect = document.createElement('select');
outputUnitSelect.setAttribute('id', 'temperature-unit-to');
outputUnitSelect.innerHTML = `
  <option value="celsius">Celsius</option>
  <option value="fahrenheit">Fahrenheit</option>
  <option value="kelvin">Kelvin</option>
`;

const convertButton = document.createElement('button');
convertButton.setAttribute('type', 'submit');
convertButton.textContent = 'Convert';

const resultParagraph = document.createElement('p');
resultParagraph.setAttribute('id', 'temperature-result');
resultParagraph.textContent = 'Result: --';

// Append elements to the form
temperatureForm.appendChild(temperatureLabel);
temperatureForm.appendChild(temperatureInput);
temperatureForm.appendChild(inputUnitLabel);
temperatureForm.appendChild(inputUnitSelect);
temperatureForm.appendChild(outputUnitLabel);
temperatureForm.appendChild(outputUnitSelect);
temperatureForm.appendChild(convertButton);

// Add form to the DOM
const section = document.createElement('section');
section.setAttribute('id', 'temperature-converter');
section.classList.add('calculator-card');
const title = document.createElement('h2');
title.textContent = 'Temperature Converter';
section.appendChild(title);
section.appendChild(temperatureForm);
section.appendChild(resultParagraph);

document.querySelector('main').appendChild(section);

// Conversion logic
function convertTemperature(value, fromUnit, toUnit) {
  let result;

  if (fromUnit === 'celsius') {
    if (toUnit === 'fahrenheit') {
      result = value * 9/5 + 32;
    } else if (toUnit === 'kelvin') {
      result = value + 273.15;
    } else {
      result = value;
    }
  } else if (fromUnit === 'fahrenheit') {
    if (toUnit === 'celsius') {
      result = (value - 32) * 5/9;
    } else if (toUnit === 'kelvin') {
      result = (value - 32) * 5/9 + 273.15;
    } else {
      result = value;
    }
  } else if (fromUnit === 'kelvin') {
    if (toUnit === 'celsius') {
      result = value - 273.15;
    } else if (toUnit === 'fahrenheit') {
      result = (value - 273.15) * 9/5 + 32;
    } else {
      result = value;
    }
  }

  return result.toFixed(2);
}

// Event listener
temperatureForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const value = parseFloat(temperatureInput.value);
  const fromUnit = inputUnitSelect.value;
  const toUnit = outputUnitSelect.value;

  if (isNaN(value)) {
    resultParagraph.textContent = 'Result: Invalid input';
    return;
  }

  const result = convertTemperature(value, fromUnit, toUnit);
  resultParagraph.textContent = `Result: ${result} ${toUnit}`;
});
