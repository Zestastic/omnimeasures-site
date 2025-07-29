document.getElementById('volume-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const value = parseFloat(document.getElementById('volume-value').value);
    const fromUnit = document.getElementById('volume-unit-from').value;
    const toUnit = document.getElementById('volume-unit-to').value;

    const result = convertVolume(value, fromUnit, toUnit);

    document.getElementById('volume-result').textContent = `Result: ${result} ${toUnit}`;
});

function convertVolume(value, fromUnit, toUnit) {
    const conversions = {
        liters: { gallons: 0.264172, milliliters: 1000, ounces: 33.814 },
        gallons: { liters: 3.78541, milliliters: 3785.41, ounces: 128 },
        milliliters: { liters: 0.001, gallons: 0.000264172, ounces: 0.033814 },
        ounces: { liters: 0.0295735, gallons: 0.0078125, milliliters: 29.5735 }
    };

    if (fromUnit === toUnit) {
        return value;
    } else {
        return value * conversions[fromUnit][toUnit];
    }
}