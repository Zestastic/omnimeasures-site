// Weight Converter Logic

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('weight-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const value = parseFloat(document.getElementById('weight-value').value);
        const fromUnit = document.getElementById('weight-unit-from').value;
        const toUnit = document.getElementById('weight-unit-to').value;
        const result = convertWeight(value, fromUnit, toUnit);
        document.getElementById('weight-result').textContent = `Result: ${result} ${toUnit}`;
    });
});

function convertWeight(value, from, to) {
    // conversion rates to kilograms
    const toKg = {
        kilograms: 1,
        pounds: 0.453592,
        grams: 0.001,
        ounces: 0.0283495,
    };
    // convert to kg, then to target
    const kgValue = value * toKg[from];
    const fromKg = {
        kilograms: 1,
        pounds: 2.20462,
        grams: 1000,
        ounces: 35.274,
    };
    if (from === to) return value;
    return +(kgValue * fromKg[to]).toFixed(4);
}
